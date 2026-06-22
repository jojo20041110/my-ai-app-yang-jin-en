'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto h-screen justify-between p-4 bg-white text-black">
      {/* 網頁標頭 */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">🎓 我的 AI 數位分身</h1>
        <p className="text-gray-500 text-sm">歡迎來到我的自我介紹聊天室</p>
      </div>

      {/* 對話紀錄區 */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
        {messages.length === 0 && (
          <div className="text-gray-400 text-center mt-10 space-y-2">
            <p className="font-medium">👋 你好！我是作者的 AI 替身</p>
            <p className="text-xs text-gray-400 bg-blue-50 text-blue-600 p-2 rounded-md">
              試著問我：「介紹一下你自己」、「你參加什麼社團？」或「聽說你是遊戲好手？」
            </p>
          </div>
        )}
        
        {/* 💡 這裡將 m 修改為 (m: any) 解決 TypeScript 嚴格檢查錯誤 */}
        {messages.map((m: any) => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-lg px-4 py-2 max-w-[80%] ${
              m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 shadow'
            }`}>
              <span className="font-bold block text-xs opacity-70 mb-1">
                {m.role === 'user' ? '訪客' : 'AI 我'}
              </span>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      {/* 輸入方塊 */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="flex-1 p-3 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:border-blue-500"
          value={input}
          placeholder="聊聊我的專長、社團或興趣..."
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
          提問
        </button>
      </form>
    </div>
  );
}