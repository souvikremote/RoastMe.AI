import Groq from 'groq-sdk';
import { StreamingTextResponse } from 'ai';

export const runtime = 'edge';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const { name, mood } = await req.json();

    const systemPrompt = `You are RoastMe.AI, a witty and sharp-tongued AI that specializes in roasting people based on their mood. Your roasts should be short, funny, and delivered in a Gen-Z style. Use emojis. Never break character. Your response must be a single paragraph.

    The user's mood is: ${mood}.
    ${name ? `The user's name is: ${name}. Feel free to use it.` : ''}

    Generate a roast based on this information. Keep it under 280 characters.`;

    const response = await groq.chat.completions.create({
      model: 'llama3-8b-8192',
      stream: true,
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: `Roast me! My name is ${name || 'anonymous'} and I'm feeling ${mood}.`,
        },
      ],
      temperature: 1,
      max_tokens: 100,
      top_p: 1,
    });

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n\n').filter(line => line.startsWith('data: '));
          for (const line of lines) {
            const json = JSON.parse(line.substring(6));
            if (json.choices[0].delta.content) {
              controller.enqueue(json.choices[0].delta.content);
            }
          }
        }
        controller.close();
      },
    });

    return new StreamingTextResponse(stream);

  } catch (error) {
    console.error('Error in roast API route:', error);
    return new Response('An error occurred while generating the roast.', { status: 500 });
  }
}