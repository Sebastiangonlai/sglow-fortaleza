"use client"

export default function QuestionModal({ question, onAnswer }) {
  return (
    <div className="absolute inset-0 bg-[#111928] bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-[#111928] p-4 rounded-lg max-w-sm w-full mx-4">
        <h2 className="text-sm font-medium mb-3 tracking-tight leading-tight">{question.text}</h2>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <button key={index} className="w-full text-sm tracking-tight leading-tight text-left p-2 bg-white hover:bg-[#4f46e5] hover:text-white text-[#0d1117] font-medium rounded transition-colors" onClick={() => onAnswer(index)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

