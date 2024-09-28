import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const QuestionAndAnswerCard = ({posts}) => {
  const {id, profileName, AskedDate, postQuestion, postAnswer, language} = posts;
    return(
        <>
             <div className="flex-col lg:flex gap-3 px-3">
                  <div className="flex gap-5">
                    <div>
                      <div className="avatar">
                        <div className="w-10 ring-primary ring-offset-base-100 rounded-full ring-1 ring-offset-2">
                          <Image
                            width={500}
                            height={400}
                            alt="profile"
                            src="https://backiee.com/static/wallpapers/1000x563/403302.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-row lg:flex items-center">
                      <div className="flex justify-center items-center">
                        <h4 className="text-sm lg:text-base">
                          {profileName}
                        </h4>
                        <button className="h-4 w-20 text-white  mx-3 text-xs bg-[#D9A34A]">
                          Enlightened
                        </button>
                      </div>
                      <small className="text-xs mr-3">
                        Asked:{" "}
                        <span className="text-blue-600">{AskedDate}</span>
                      </small>{" "}
                      <br />
                      <small className="text-xs">
                        In: <span className="text-blue-600">{language}</span>
                      </small>
                    </div>
                  </div>
                  <div className="w-full mt-5 lg:mt-0">
                    <h4 className="text-lg text-justify font-semibold py-1.5">
                      {postQuestion}
                    </h4>
                    <p className="py-6 text-justify">
                      {postAnswer}
                    </p>
                    <div className="flex gap-2 py-4">
                      <button className="hover:text-white border border-[#0285DD] hover:bg-[#0285DD] hover:border-[#0285DD] btn-sm rounded-sm">
                        analytics
                      </button>
                      <button className="hover:text-white border border-[#0285DD] hover:bg-[#0285DD] hover:border-[#0285DD] btn-sm rounded-sm">
                        programming
                      </button>
                    </div>
                    <div className="flex w-full gap-3 my-4 rounded-sm justify-between items-center  bg-slate-700 p-4">
                      <div className="flex gap-3">
                        <button className="flex items-center gap-2 hover:text-white border border-[#0285DD] hover:bg-[#0285DD] hover:border-[#0285DD] py-1 px-2 rounded-sm">
                          <FaMessage size={12} />
                          Answers
                        </button>
                        <button className="hover:text-white flex items-center gap-2 border border-[#0285DD] hover:bg-[#0285DD] hover:border-[#0285DD] py-1 px-2 rounded-sm">
                          <FaEye />
                          2k Views
                        </button>
                      </div>
                      <div>
                        <Link href="answer">
                          <button className="bg-black py-1 px-2 text-white rounded-sm">
                            Answer
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
        </>
    )}
export default QuestionAndAnswerCard;