import Card from "react-bootstrap/Card";
import ReactFlow, { Background } from "reactflow";
import { nodes, edges } from "../utils/data";
import "reactflow/dist/style.css";

const EER = () => {
  return (
    <Card.Body className="d-flex flex-column align-items-center text-center">
      <div style={{ width: "100%", height: "300px" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          nodesDraggable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnDrag={true}
        >
          <Background color="#aaa" gap={20} />
        </ReactFlow>
      </div>
    </Card.Body>
  );
};

export default EER;
