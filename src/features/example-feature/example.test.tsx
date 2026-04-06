import { describe, it, expect } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '@/mocks/server';

describe('MSW and Vitest Setup Testing', () => {
  it('mocks external API requests using MSW', async () => {
    // Override handler for this test specifically
    server.use(
      http.get('https://api.example.com/test', () => {
        return HttpResponse.json({ success: true, message: 'Intercepted!' });
      })
    );

    const response = await fetch('https://api.example.com/test');
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.message).toBe('Intercepted!');
  });
});
