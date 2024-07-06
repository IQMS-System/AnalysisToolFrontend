import smsImage from "../../assets/sms.png";

const Footer = () => {
  return (
    <div className=" flex absolute bottom-8 left-8 gap-3 items-center">
      <div>
        <img src={smsImage} alt="sms" className="w-56" />
      </div>
      <div className="flex flex-col text-xs">
        <p>Delta Commercial Park 2, JL. Kenari Raya Blok D No. 7 Lippo</p>
        <p>Cikarang, Cikarang Pusat, Bekasi 17530, Indonesia</p>
        <p>email: info@sms-sg.com</p>
        <p>phone: +62 811 9177 772</p>
      </div>
    </div>
  );
};

export default Footer;
