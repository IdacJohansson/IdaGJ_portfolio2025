import ReactFlow, { Background } from "reactflow";
import { nodes, edges } from "../utils/data";
import "reactflow/dist/style.css";

const EER = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnDrag={true}
      >
        <Background color="#aaa" gap={20} />
      </ReactFlow>
    </div>
  );
};

export default EER;
