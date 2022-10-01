import React from 'react';
import search from '../../../assets/search.png';
import logo from '../../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <nav class="relative navbar navbar-expand-lg shadow-md py-2 bg-white ">
        <div class="px-6 w-full flex justify-between">
          {/* mobile hamburger S*/}
          <div class="lg:hidden flex">
            <button
              class=" navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                />
              </svg>
            </button>
          </div>
          {/* mobile hamburger E*/}

          {/* LOGO */}
          <div class="h-[100px] px-6 flex flex-wrap items-center flex-row justify-center">
            <div class="lg:static lg:translate-x-0 lg:translate-y-0 flex flex-row justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <img
                class="inline-block"
                src={logo}
                alt="logo"
              />
            </div>
          </div>

          {/* PC Menu items */}
          <div class=" hidden lg:flex grow-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center justify-center float-left">
            <div class="  flex items-center">
              <img
                src={search}
                class="w-[27px] h-[27px] mr-[14px] inlin-block align-middle "
                alt="search"
              />
              <input
                class="bg-[#5469b2] w-[290px] h-[38px] rounded-[20px] p-4  text-white placeholder:text-white"
                placeholder="검색어를 입력해주세요"
              />
            </div>
          </div>
          <div class=" grow-1 flex ">
            <ul class=" navbar-nav flex items-center ">
              <ul class="lg:flex hidden items-center">
                <li class=" nav-item">
                  <a
                    class="nav-link block pr-2 lg:px-2 py-2 mr-[91px] hover:text-blue-500 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    추천 관광지
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class=" nav-link block lg:px-3 mr-[120px] py-2 hover:text-blue-500 focus:text-gray-700 transition duration-150 ease-in-out "
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    지도보기
                  </a>
                </li>
              </ul>
              <button
                type="button"
                class=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 "
              >
                Dark
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
