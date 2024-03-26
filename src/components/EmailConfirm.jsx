import { confirm } from "../assets/icons";

const EmailConfirm = () => {
  return (
    <div className="flex border border-green-800 ">
      <span className="border border-green-800 bg-green-800 flex px-4">
        <img src={confirm} alt="confirm" width={30} />
      </span>
      <h1 className="font-wix p-5">
        Success! Thank you for reaching out, I will get back to you as soon as I
        can
      </h1>
    </div>
  );
};

export default EmailConfirm;
