const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-white container mx-auto px-[8rem] pb-[8rem]">
            {children}
        </div>
    );
};

Container.defaultProps = {};

export default Container;
