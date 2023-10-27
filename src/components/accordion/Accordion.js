import { useState } from "react"

export default function Accordion() {
    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [questionId, setQuestionId] = useState(null)

    const showAnswerHandler = (id) => {
        setQuestionId(id)
        setIsShowAnswer(!isShowAnswer)
    }

    const datas = [
        {
            id: 1,
            question: "Question 1",
            answer: "Answer 1"
        },
        {
            id: 2,
            question: "Question 2",
            answer: "Answer 2"
        },
        {
            id: 3,
            question: "Question 3",
            answer: "Answer 3"
        },
        {
            id: 4,
            question: "Question 4",
            answer: "Answer 4"
        },
    ]
    return (
        <>
            <div className="w-full h-screen flex flex-col gap-12 items-center justify-center">
            <h2 className="font-bold text-gray-700 text-3xl">
                    Accordion component
                </h2>
                <div className=" flex items-center flex-col gap-8 full">
                    {
                        datas.map(data => (
                            <div className="transition duration-300 flex flex-col w-[300px] p-2 border border-2 rounded border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200">
                                <div
                                    onClick={() => showAnswerHandler(data.id)}
                                    className="flex items-center justify-between cursor-pointer ">
                                    <h5>
                                        {data.question}
                                    </h5>
                                    <svg fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        className={`w-5 h-5  ease-in-out transition ${data.id===questionId  ? "rotate-45" : ""}`}>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                                <h6 className={`text-gray-800  pt-2transition duration-300 ${data.id===questionId ? "inline" : "hidden"}`}>
                                    {data.answer}
                                </h6>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}