import Image from "next/image";
import FooterLogo from "../../../../public/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-0 justify-items-center text-base-content p-10">
        <aside className="col-span-2 lg:col-span-1 justify-items-center">
          <Image width={80} height={80} src={FooterLogo} alt="website logo" />
          <p>
            Inquiry Ltd.
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <ul>
            <li className="link link-hover">Branding</li>
            <li className="link link-hover">Design</li>
            <li className="link link-hover">Marketing</li>
            <li className="link link-hover">Advertisement</li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <ul>
            <li className="link link-hover">Branding</li>
            <li className="link link-hover">Design</li>
            <li className="link link-hover">Marketing</li>
            <li className="link link-hover">Advertisement</li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <ul>
            <li className="link link-hover">Branding</li>
            <li className="link link-hover">Design</li>
            <li className="link link-hover">Marketing</li>
            <li className="link link-hover">Advertisement</li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <nav className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </nav>
        </nav>
      </footer>

      {/* <footer className="p-10 bg-[#F0412E] text-white">
        <nav className="footer grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto justify-items-center opacity-95">
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Blood Donation</a>
            <a className="link link-hover">Health Check</a>
            <a className="link link-hover">Blood Bank</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <header className="footer-title">Explore</header>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Blood Group</a>
            <a className="link link-hover">Security</a>
            <a className="link link-hover">fund</a>
          </nav>
          <nav>
            <header className="footer-title">Social</header>
            <nav className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current bg-blue-600 pt-1"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </nav>
          </nav>
        </nav>
      </footer>
      <footer className="px-10 py-4 border-t bg-neutral text-neutral-content border-base-300">
        <nav className="footer footer-center  max-w-5xl mx-auto">
          <aside>
            <p>
              Copyright © 2023 - All right reserved by Save Life Blood Donation
            </p>
          </aside>
        </nav>
      </footer> */}
    </>
  );
};
export default Footer;
