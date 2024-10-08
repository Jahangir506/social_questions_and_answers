import QuestionAndAnswerCard from "@/components/QuestionAndAnswer/QuestionAndAnswerCard";
import { questionAndAnswers } from "../../lib/questionAndAnswers";

const HomePage = () => {
  console.log(questionAndAnswers)
  return (
    <>
      <div className="w-full">
        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab font-normal text-sm h-20"
            aria-label="Recent Questions"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content my-4">
            <div className="border-b w-full border-slate-700">
              <div className="p-0 lg:p-5">
              {
                questionAndAnswers.map((posts)=>(
                  <QuestionAndAnswerCard key={posts.id} posts={posts}/>
                ))
              }
              </div>
            </div>
            {/* <div className="border-b border-slate-700">
              <div className="p-5">
                <div className="flex gap-3 px-3">
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
                  <div className="ml-3">
                    <div className="flex items-center gap-4">
                      <h4 className="text-base">Md. Jahangir Alam</h4>
                      <button className="h-4 w-20 text-white text-xs bg-[#D9A34A]">
                        Enlightened
                      </button>
                      <small className="text-xs">
                        Asked:{" "}
                        <span className="text-blue-600">April 04 2024</span>
                      </small>
                      <small className="text-xs">
                        In: <span className="text-blue-600">Language</span>
                      </small>
                    </div>
                    <h4 className="text-base font-semibold py-1.5">
                      How do native speakers tell I’m foreign based on my
                      English alone?
                    </h4>
                    <p className="py-6">
                      I’m a 19-year-old student from Malaysia. I’ve been
                      introduced to the language at a very young age and I’m
                      capable of conducting any type of conversation. However,
                      some of my English-speaking friends on the internet didn’t
                      take too long to ...
                    </p>
                    <div className="flex gap-2 py-4">
                      <button className="btn btn-outline hover:bg-primary btn-sm rounded-sm">
                        analytics
                      </button>
                      <button className="btn btn-outline btn-sm rounded-sm">
                        programming
                      </button>
                    </div>
                    <div className="flex my-4 rounded-sm justify-between items-center  bg-slate-700 w-full p-5 ">
                      <div className="flex gap-3">
                        <button className="btn btn-outline btn-sm rounded-sm">
                          programming
                        </button>
                        <button className="btn btn-outline btn-sm rounded-sm">
                          <span>2k Views</span>
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-black text-white btn-sm rounded-sm">
                          Answer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-slate-700">
              <div className="p-5">
                <div className="flex gap-3 px-3">
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
                  <div className="ml-3 w-full">
                    <div className="flex items-center gap-4">
                      <h4 className="text-base">Md. Jahangir Alam</h4>
                      <button className="h-4 w-20 text-white text-xs bg-[#D9A34A]">
                        Enlightened
                      </button>
                      <small className="text-xs">
                        Asked:{" "}
                        <span className="text-blue-600">April 04 2024</span>
                      </small>
                      <small className="text-xs">
                        In: <span className="text-blue-600">Language</span>
                      </small>
                    </div>
                    <h4 className="text-base font-semibold py-1.5">
                      How do native speakers tell I’m foreign based on my
                      English alone?
                    </h4>
                    <p className="py-6">
                      I’m a 19-year-old student from Malaysia. I’ve been
                      introduced to the language at a very young age and I’m
                      capable of conducting any type of conversation. However,
                      some of my English-speaking friends on the internet didn’t
                      take too long to ...
                    </p>
                    <div className="flex gap-2 py-4">
                      <button className="btn btn-outline hover:bg-primary btn-sm rounded-sm">
                        analytics
                      </button>
                      <button className="btn btn-outline btn-sm rounded-sm">
                        programming
                      </button>
                    </div>
                    <div className="flex my-4 rounded-sm justify-between items-center  bg-slate-700 w-[200px] p-5 ">
                      <div className="flex w-full gap-3">
                        <button className="btn btn-outline btn-sm rounded-sm">
                          programming
                        </button>
                        <button className="btn btn-outline btn-sm rounded-sm">
                          <span>2k Views</span>
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-black text-white btn-sm rounded-sm">
                          Answer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-slate-700">
              <div className="p-5">
                <div className="flex gap-3 px-3">
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
                  <div className="ml-3">
                    <div className="flex items-center gap-4">
                      <h4 className="text-base">Md. Jahangir Alam</h4>
                      <button className="h-4 w-20 text-white text-xs bg-[#D9A34A]">
                        Enlightened
                      </button>
                      <small className="text-xs">
                        Asked:{" "}
                        <span className="text-blue-600">April 04 2024</span>
                      </small>
                      <small className="text-xs">
                        In: <span className="text-blue-600">Language</span>
                      </small>
                    </div>
                    <h4 className="text-base font-semibold py-1.5">
                      How do native speakers tell I’m foreign based on my
                      English alone?
                    </h4>
                    <p className="py-6">
                      I’m a 19-year-old student from Malaysia. I’ve been
                      introduced to the language at a very young age and I’m
                      capable of conducting any type of conversation. However,
                      some of my English-speaking friends on the internet didn’t
                      take too long to ...
                    </p>
                    <div className="flex gap-2 py-4">
                      <button className="btn btn-outline hover:bg-primary btn-sm rounded-sm">
                        analytics
                      </button>
                      <button className="btn btn-outline btn-sm rounded-sm">
                        programming
                      </button>
                    </div>
                    <div className="flex my-4 rounded-sm justify-between items-center  bg-slate-700 w-full p-5 ">
                      <div className="flex gap-3">
                        <button className="btn btn-outline btn-sm rounded-sm">
                          programming
                        </button>
                        <button className="btn btn-outline btn-sm rounded-sm">
                          <span>2k Views</span>
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-black text-white btn-sm rounded-sm">
                          Answer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-slate-700">
              <div className="p-5">
                <div className="flex gap-3 px-3">
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
                  <div className="ml-3">
                    <div className="flex items-center gap-4">
                      <h4 className="text-base">Md. Jahangir Alam</h4>
                      <button className="h-4 w-20 text-white text-xs bg-[#D9A34A]">
                        Enlightened
                      </button>
                      <small className="text-xs">
                        Asked:{" "}
                        <span className="text-blue-600">April 04 2024</span>
                      </small>
                      <small className="text-xs">
                        In: <span className="text-blue-600">Language</span>
                      </small>
                    </div>
                    <h4 className="text-base font-semibold py-1.5">
                      How do native speakers tell I’m foreign based on my
                      English alone?
                    </h4>
                    <p className="py-6">
                      I’m a 19-year-old student from Malaysia. I’ve been
                      introduced to the language at a very young age and I’m
                      capable of conducting any type of conversation. However,
                      some of my English-speaking friends on the internet didn’t
                      take too long to ...
                    </p>
                    <div className="flex gap-2 py-4">
                      <button className="btn btn-outline hover:bg-primary btn-sm rounded-sm">
                        analytics
                      </button>
                      <button className="btn btn-outline btn-sm rounded-sm">
                        programming
                      </button>
                    </div>
                    <div className="flex my-4 rounded-sm justify-between items-center  bg-slate-700 w-full p-5 ">
                      <div className="flex gap-3">
                        <button className="btn btn-outline btn-sm rounded-sm">
                          programming
                        </button>
                        <button className="btn btn-outline btn-sm rounded-sm">
                          <span>2k Views</span>
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-black text-white btn-sm rounded-sm">
                          Answer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* <input
            type="radio"
            name="my_tabs_1"
            className="tab font-normal text-base h-20"
            aria-label="Most Answered"
          />
          <div role="tabpanel" className="tab-content my-4">
          <div>
              <div className="my-5">
                <div className="flex gap-3 px-3">
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
                  <div className="ml-3">
                    <div className="flex items-center gap-4">
                      <h4 className="text-base">Md. Jahangir Alam</h4>
                      <button className="h-4 w-20 text-white text-xs bg-[#D9A34A]">
                        Enlightened
                      </button>
                      <small className="text-xs">
                        Asked:{" "}
                        <span className="text-blue-600">April 04 2024</span>
                      </small>
                      <small className="text-xs">
                        In: <span className="text-blue-600">Language</span>
                      </small>
                    </div>
                    <h4 className="text-base font-semibold py-1.5">
                      How do native speakers tell I’m foreign based on my
                      English alone?
                    </h4>
                    <p className="py-6">
                      I’m a 19-year-old student from Malaysia. I’ve been
                      introduced to the language at a very young age and I’m
                      capable of conducting any type of conversation. However,
                      some of my English-speaking friends on the internet didn’t
                      take too long to ...
                    </p>
                    <div className="flex gap-2 py-4">
                      <button className="btn btn-outline hover:bg-primary btn-sm rounded-sm">
                        analytics
                      </button>
                      <button className="btn btn-outline btn-sm rounded-sm">
                        programming
                      </button>
                    </div>
                    <div className="flex mt-4 rounded-sm justify-between items-center  bg-slate-700 w-[290px] mx-auto p-5 ">
                      <div className="flex gap-3">
                        <button className="btn btn-outline btn-sm rounded-sm">
                          programming
                        </button>
                        <button className="btn btn-outline btn-sm rounded-sm">
                          <span>2k Views</span>
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-black text-white btn-sm rounded-sm">
                          Answer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            className="tab font-normal text-base h-20"
            aria-label="Bump Questions"
          />
          <div role="tabpanel" className="tab-content my-4">
            <div>
              <div className="my-5">
                <div className="flex gap-3 px-3">
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
                  <div className="ml-3">
                    <h4 className="text-base">Md. Jahangir Alam</h4>
                    <div className="flex-col mt-1">
                      <p className="text-xs flex ml-1">
                        <TbMessage className="mt-0.5" />
                        <small className="mx-1.5 mb-1"> 5 Questions</small>{" "}
                        <small>518 Points</small>
                      </p>
                      <button className="py-[1px] px-1.5 text-white text-xs bg-[#D9A34A]">
                        Enlightened
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            className="tab font-normal text-base h-20"
            aria-label="Answers"
          />
          <div role="tabpanel" className="tab-content my-4">
            <div>
              <div className="my-5">
                <div className="flex gap-3 px-3">
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
                  <div className="ml-3">
                    <h4 className="text-base">Md. Jahangir Alam</h4>
                    <div className="flex-col mt-1">
                      <p className="text-xs flex ml-1">
                        <TbMessage className="mt-0.5" />
                        <small className="mx-1.5 mb-1"> 5 Questions</small>{" "}
                        <small>518 Points</small>
                      </p>
                      <button className="py-[1px] px-1.5 text-white text-xs bg-[#D9A34A]">
                        Enlightened
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            className="tab font-normal text-base h-20"
            aria-label="Most Visited"
          />
          <div role="tabpanel" className="tab-content my-4">
            <div>
              <div className="my-5">
                <div className="flex gap-3 px-3">
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
                  <div className="ml-3">
                    <h4 className="text-base">Md. Jahangir Alam</h4>
                    <div className="flex-col mt-1">
                      <p className="text-xs flex ml-1">
                        <TbMessage className="mt-0.5" />
                        <small className="mx-1.5 mb-1"> 5 Questions</small>{" "}
                        <small>518 Points</small>
                      </p>
                      <button className="py-[1px] px-1.5 text-white text-xs bg-[#D9A34A]">
                        Enlightened
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="my-8 w-full px-3 lg:px-8 ">
        <button className="btn btn-sm bg-slate-500 hover:bg-[#0285DD] border hover:border-[#0285DD] h-9 w-full bg-gray-400 text-white hover:bg-primary rounded-sm">
          Load More Question
        </button>
      </div>
    </>
  );
};
export default HomePage;
