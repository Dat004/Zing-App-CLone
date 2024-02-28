import Button from '../Button';

function Tabs({ children, onClick = () => {}, isActive = false }) {
    return (
        <Button
            className="h-[25px] text-[12px] font-normal py-[4px] px-[25px] hover:opacity-90"
            small
            primary={isActive ? true : false}
            outline={!isActive ? true : false}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}

export default Tabs;
