// Copyright 2024 ragad
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by Navbarlicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useRef, useState } from "react";

function Navbar() {
  const hoverRef = useRef();
  const [isHovered, setIsHovered] = useState([false, false, false, false]);
  const navbarContents = ["About", "Projects", "Skills", "Contact"];

  function handleHover(index) {
    let temp = [...isHovered];
    temp[index] = true;
    setIsHovered(temp
    );
    // temp=hoverRef.current.className;
    // hoverRef.current.className= temp + " w-10 transition-all duration-100 ease-out "

  }
  function handleLeave(index) {
    let temp = [...isHovered];
    temp[index] = false;
    setIsHovered(temp
    );
    //hoverRef.current.className=temp;
  }
  return (
    <nav class=" fixed w-full top-0  bg-impBage-10 border-gray-200 z-10 ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">

        </div>

        <div class="hidden w-full md:block md:w-auto font-lora" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   ">

            {navbarContents.map((cont, index) => {

              return (<li>
                <button onMouseOver={() => handleHover(index)} onMouseLeave={() => handleLeave(index)} class=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">{cont}</button>
                <div className={` ${isHovered[index] ? "w-10 transition-all duration-100 ease-out" : ""} mx-auto  w-0 h-[1px] bg-slate-800`}></div>
              </li>)

            })}

          </ul>
        </div>

        <div href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <svg class="w-5 h-5 text-gray-800 mr-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
            <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
            <path d="M3 5.012H0V15h3V5.012Z" />
          </svg>
          <svg class="w-5 h-5 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
          </svg>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
