import axios from "axios";
import React, { useEffect } from "react";
import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "asdsdddwwd" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "asdasdasd" } },
];
const initialEdges = [];

export default function Home() {
  const [nodes, setNodes] = React.useState([]);
  const [edges, setEdges] = React.useState([]);
  const [Bot, setBot] = React.useState({});

  useEffect(() => {
    axios
      .get("http://localhost:6060/api/bot/get/641e1ae0e77005996e885164")
      .then((res) => {
        setBot(res.data.data);
        // { id: "1", position: { x: 0, y: 0 }, data: { label: "asdsdddwwd" } },
        setNodes(
          res.data.data.nodes.map((node) => {
            return {
              id: node.step.toString(),
              _id: node._id,
              position: { x: node.position.x, y: node.position.y },
              data: { label: node.content },
            };
          })
        );
        let myEdges = [];
        res.data.data.nodes?.map((node) => {
          node.options?.map((option) => {
            console.log(option);
            myEdges.push({
              id: `e${option.sourse}-${option.target}`,
              source: option.sourse,
              target: option.target,
            });
          });
        });

        setEdges(myEdges);
        // console.log(res.data);
        // setNodes(res.data.nodes);
        // setEdges(res.data.edges);
      });
  }, []);

  const addNode = () => {
    const newNode = {
      id: `3`,
      position: { x: 300, y: 100 },
      data: { label: `asdasdasdsa` },
    };
    setNodes([...nodes, newNode]);

    setEdges([
      ...edges,
      {
        id: `e1-3`,
        source: "1",
        target: "3",
      },
    ]);
  };
  console.log(edges);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <h1>{Bot.name}</h1>
      <button onClick={addNode}>Add Node</button>
      <ReactFlow nodes={nodes} edges={edges} />
    </div>
  );
}
