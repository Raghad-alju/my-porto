
// text-blue-600 border-b-2 border-blue-600

function Projects() {
    return (
        <div className=" w-[80rem] h-auto pb-10  bg-Linen mx-auto  font-lora shadow-xl ">
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 pl-16 ">
                <ul class="flex flex-wrap -mb-px">
                    <li class="me-2">
                        <button  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">Front End Projects</button>
                    </li>
                    <li class="me-2">
                        <button  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">Backend Projects</button>
                    </li>
                    <li class="me-2">
                        <button  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">Group Projects</button>
                    </li>
                 
                </ul>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 m-12">


                <div class="max-w-sm bg-white border border-gray-200 shadow ">
                    <a href="#">
                        <img className="h" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Projects;
