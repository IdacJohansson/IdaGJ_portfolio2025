export const jsonString = `{
  "status": 200,
  "success": true,
  "developer": {
    "name": "Ida Grufman Johansson",
    "age": 35,
    "role": "Junior Software Developer",
    "lives_in": {
      "city": "Kungsängen",
      "country": "Sweden"
    },
    "education": [
      "Backend Developer - Node.js",
      "Frontend Developer",
      "Java Developer"
    ],
    "loves": [
    "code", 
    "creative UI", 
    "clean design"
    ],
    "stack": ["backend", "frontend"],
    "message": "Building & deploying creativity and logic."
}`;

// EER

const nodeStyle = {
  background: "transparent",
  color: "#fff",
  border: "2px solid #fff",
  borderRadius: "10px",
  padding: "8px 12px",
  fontWeight: 500,
  fontSize: "20px",
  fontFamily: "Google Sans Code",
  textAlign: "center",
};

const headingLable = {
  background: "#111",
  color: "#fff",
  padding: 10,
  borderRadius: 10,
  fontWeight: "bold",
  fontSize: "30px",
  fontFamily: "Google Sans Code",
  width: "400px",
};

const categoryStyle = {
  background: "#fff",
  borderRadius: 10,
  padding: 9,
  fontSize: "25px",
  fontFamily: "Google Sans Code",
  width: "180px",
};

export const nodes = [
  {
    id: "1",
    position: { x: 250, y: -60 },
    data: { label: "Ida Grufman Johansson" },
    style: headingLable,
  },

  {
    id: "2",
    position: { x: 100, y: 70 },
    data: { label: "Tech Stack" },
    style: categoryStyle,
  },
  {
    id: "3",
    position: { x: 570, y: 70 },
    data: { label: "Qualities" },
    style: categoryStyle,
  },

  {
    id: "4",
    position: { x: 20, y: 200 },
    data: { label: "React" },
    style: nodeStyle,
  },
  {
    id: "5",
    position: { x: 120, y: 300 },
    data: { label: "Node.js" },
    style: nodeStyle,
  },
  {
    id: "6",
    position: { x: 300, y: 350 },
    data: { label: "Java" },
    style: nodeStyle,
  },
  {
    id: "7",
    position: { x: 380, y: 200 },
    data: { label: "DevOps" },
    style: nodeStyle,
  },

  {
    id: "8",
    position: { x: 520, y: 320 },
    data: { label: "Creative" },
    style: nodeStyle,
  },
  {
    id: "9",
    position: { x: 640, y: 400 },
    data: { label: "Driven" },
    style: nodeStyle,
  },
  {
    id: "10",
    position: { x: 760, y: 300 },
    data: { label: "Project Leader" },
    style: nodeStyle,
  },
];

export const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },

  { id: "e2-4", source: "2", target: "4" },
  { id: "e2-5", source: "2", target: "5" },
  { id: "e2-6", source: "2", target: "6" },
  { id: "e2-7", source: "2", target: "7" },

  { id: "e3-8", source: "3", target: "8" },
  { id: "e3-9", source: "3", target: "9" },
  { id: "e3-10", source: "3", target: "10" },
];
