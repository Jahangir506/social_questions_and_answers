import { IoMdHome } from "react-icons/io";
import { RiCommunityLine } from "react-icons/ri";
import { LiaPollSolid } from "react-icons/lia";
import { TbWorldQuestion } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdGroupAdd } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { GiTrophyCup } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoIosCart } from "react-icons/io";


const LeftSideRoute = () => {
  return (
    <>
      <div className="">
        <ul className="space-y-7">
          <li className="flex">
            <IoMdHome size={23} className="mr-2 mb-0.5"/>
            Home
          </li>
          <li className="flex">
            <RiCommunityLine size={23} className="mr-2 mb-0.5"/>
            Communities
          </li>
          <li className="flex">
            <TbWorldQuestion size={23} className="mr-2 mb-0.5"/>
            Questions
          </li>
          <li className="flex ">
            <LiaPollSolid size={23} className="mr-2 mb-0.5"/>
            Polls
          </li>
          <li className="flex ">
            <FaPeopleGroup size={23} className="mr-2 mb-0.5"/>
            Group
          </li>
          <li className="flex ">
            <MdGroupAdd size={23} className="mr-2 mb-0.5"/>
            Add Group
          </li>
          <li className="flex ">
            <GoTag size={23} className="mr-2 mb-0.5"/>
            Tags
          </li>
          <li className="flex ">
            <GiTrophyCup size={23} className="mr-2 mb-0.5"/>
            Badges
          </li>
          <li className="flex ">
            <FaUserFriends size={23} className="mr-2 mb-0.5"/>
            Users
          </li>
          <li className="flex ">
            <IoMdHelpBuoy size={23} className="mr-2 mb-0.5"/>
            Help
          </li>
          <li className="flex ">
            <IoIosCart size={23} className="mr-2 mb-0.5"/>
            Buy Theme
          </li>
        </ul>
      </div>
    </>
  );
};
export default LeftSideRoute;
