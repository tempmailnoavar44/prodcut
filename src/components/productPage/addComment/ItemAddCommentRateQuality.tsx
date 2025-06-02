import { Checkbox } from "../../ui";

interface Props {
  type: string;
  productRateQuality: number;
  index: number;
  selected: number | null;
  setSelected: (value: number | null) => void;
}

const ItemAddCommentRateQuality = ({
  type,
  productRateQuality,
  index,
  selected,
  setSelected,
}: Props) => {

  return (
    <div>
      <div className="py-5 px-4 flex gap-3  flex-col">
        <h6 className="text-sm font-normal text-gray-500">{type}:</h6>
        <div className="flex gap-2 justify-between">
          {[1, 2, 3].map((rate, idx) => (
            <Checkbox
              key={idx}
              name={type}
              rate={rate}
              selected={selected !== null ? String(selected) : null}
              setNewRate={setSelected}
            />
          ))}
        </div>
      </div>
      {index !== productRateQuality - 1 && <hr />}
    </div>
  );
};

export default ItemAddCommentRateQuality;
