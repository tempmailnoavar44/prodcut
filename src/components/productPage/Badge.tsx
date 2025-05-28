const Badge = ({ name }: { name: string }) => {
  return (
    <div className="bg-success-100 border border-success-300 text-success-700 text-xs font-normal p-1 rounded-2xl text-center  flex items-center justify-center gap-2">
      <div className="size-[6px] rounded-[50%] bg-success-700"></div>
      {name}
    </div>
  );
};

export default Badge;
