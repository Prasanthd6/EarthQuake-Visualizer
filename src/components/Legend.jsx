// import { magColor } from "../utils/helpers";

// export default function Legend() {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
//       <h3 className="font-semibold mb-2">Legend</h3>
//       <div className="flex flex-wrap items-center gap-3 text-sm">
//         {[1,2,3,4,5,6,7].map(m => (
//           <div key={m} className="flex items-center gap-2">
//             <span className="inline-block size-4 rounded-full" style={{ background: magColor(m) }} />
//             <span className="opacity-80">M≥{m}</span>
//           </div>
//         ))}
//         <span className="ml-auto text-xs opacity-70">Circle size scales with magnitude</span>
//       </div>
//     </div>
//   );
// }
import { magColor } from "../utils/helpers";

export default function Legend() {
  return (
    <div className="legendBox">
      <h3 className="legendTitle">Legend</h3>
      <div className="legendItems">
        {[1,2,3,4,5,6,7].map(m => (
          <div key={m} className="legendItem">
            <span className="legendDot" style={{ background: magColor(m) }} />
            <span className="legendText">M≥{m}</span>
          </div>
        ))}
        <span className="legendNote">Circle size scales with magnitude</span>
      </div>
    </div>
  );
}
