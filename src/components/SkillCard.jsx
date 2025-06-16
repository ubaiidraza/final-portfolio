import PropTypes from "prop-types"

const SkillCard = ({icon, name}) => {
  return (
        <div className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110  cursor-pointer gap-1 ">
            {icon}
            <span>{name}</span>
        </div>
  )
}

// Prop Validation
SkillCard.propTypes = {
    icon: PropTypes.element.isRequired, // icon should be a react element and is required
    name: PropTypes.string.isRequired, // name should be a string and is required
  };

export default SkillCard