import { useTypingEffect } from '../Hooks/useTypingEffect';

export const Quotes =   () => {
  const fullText = `"A learned man is superior to a rich man, because a learned man can earn wealth, but a rich man cannot earn learning."`;
  const { text, isComplete } = useTypingEffect(fullText);

  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold mt-4">
            {text}
            <span className="blinking-cursor">|</span>
          </div>
          {isComplete && (
            <div className="transition-all duration-1000 ease-in transform translate-y-0 opacity-100"
                 style={{ animation: 'fadeIn 1s' }}>
              <div className="text-lg max-w-md font-semibold mt-2">Chanakya</div>
              <div className="text-gray-500 text-sm max-w-md font-medium">
                Indian Philosopher
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};