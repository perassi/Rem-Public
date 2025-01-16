export const OverviewCard = ({ title, value }) => {
  return (
    <div className="flex gap-2 flex-col justify-between p-5 shadow rounded-lg bg-white min-h-[115px] min-w-[250px] flex-1">
      <h4 className="font-medium text-base leading-none">{title}</h4>
      <p className="font-semibold text-4xl leading-none">{value}</p>
    </div>
  );
};
