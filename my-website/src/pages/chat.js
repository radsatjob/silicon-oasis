
import React from 'react';
import Layout from '@theme/Layout';

export default function ChatPage() {
  return (
    <Layout title="Chat with Us">
      <div style={{ height: 'calc(100vh - 60px)', display: 'flex', flexDirection: 'column' }}>
        <iframe
          src="https://tawk.to/chat/67fe1b5f2656e4190ca989aa/1ios9lrcr"
          title="Live Chat"
          style={{
            flex: 1,
            border: 'none',
            width: '100%',
          }}
          allow="microphone; camera"
        />
      </div>
    </Layout>
  );
}
