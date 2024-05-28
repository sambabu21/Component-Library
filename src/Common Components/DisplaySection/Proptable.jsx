export default function Proptable({ propstable }) {
  return (
    propstable && (
      <div className="flex flex-col w-full">
        <h3 className="font-semibold text-2xl text-[#EEEEEE] tracking-tight mb-10">
          API reference
        </h3>
        <div className="border bg-[#191919] sm:border border-[#484848]  sm:rounded-xl ">
          <table className="min-w-full  ">
            <thead className=" w-full h-16 border-b border-[#484848] px-10 sm:rounded-t-xl">
              <th className="text-[#EEEEEE] font-medium text-left px-4">
                Props
              </th>
              <th className="text-[#EEEEEE] font-medium text-left px-4">
                Value
              </th>
              <th className="text-[#EEEEEE] font-medium text-left px-4">
                Default
              </th>
            </thead>
            <tbody className="w-full divide-y divide-[#484848]">
              {propstable.map((prop) => {
                return (
                  <tr className="w-full px-10" key={prop.name}>
                    <td className="p-4">
                      <div className="prop text-[#B4B4B4] inline-flex justify-center items-center">
                        {prop.name}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="prop text-[#B4B4B4] inline-flex justify-center items-center">
                        {prop.value.join(" | ")}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="prop text-[#B4B4B4] inline-flex justify-center items-center">
                        {prop.default}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
}
