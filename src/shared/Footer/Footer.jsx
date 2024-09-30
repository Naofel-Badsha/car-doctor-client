import footerlogo  from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-white mt-10 rounded-t-md">
        <aside>
          <img className='bg-white p-5 rounded-lg' src={footerlogo} />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <div className='mt-5'>
          <i className="fa-brands fa-facebook text-[25px] cursor-pointer"></i>
          <i className="fa-brands fa-twitter text-[25px] cursor-pointer ml-5"></i>
          <i className="fa-brands fa-linkedin text-[25px] cursor-pointer ml-5"></i>
          <i className="fa-brands fa-instagram text-[25px] cursor-pointer ml-5"></i>
          </div>
        </aside>
        <nav>
          <header className="font-bold text-xl text-white ">About</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <header className="font-bold text-xl text-white ">Company</header>
          <a className="link link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav>
          <header className="font-bold text-xl text-white ">Support</header>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accesbillity</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;