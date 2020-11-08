import { useRecoilValue, useRecoilState } from 'recoil'
import { getAnswer } from '../../../store/selector'
import { selectAnswer } from '../../../store/atom'

function MyAnswer() {
    const { list, answer } = useRecoilValue(getAnswer)
    const [select, setSelect] = useRecoilState(selectAnswer)

    console.log(answer)

    return (
        <div className="max-h-screen-90 m-5 pb-2 bg-white rounded">
            <div className="px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6">
                <nav className="relative z-0 inline-flex shadow-sm">
                    {
                        list.map((no) => {
                            return (
                                <button key={no} className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium  focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150`}
                                    onClick={() => setSelect(no)}
                                >
                                    {no}
                                </button>
                            )
                        })
                    }
                </nav>
            </div>
            <div className="px-4 py-2 flex flex-col max-h-screen-70 overflow-auto">
                {answer.map((ans, i) => (
                    <p key={i} className="flex-row">
                        - {ans}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default MyAnswer