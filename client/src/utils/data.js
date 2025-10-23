
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

const getHeadingLabelStyle = () => {
  if (window.innerWidth >= 400 && window.innerWidth <= 480) {
    return {
      background: "#111",
      color: "#fff",
      padding: 6,
      borderRadius: 10,
      fontWeight: "bold",
      fontSize: "10px",
      fontFamily: "Google Sans Code",
      width: "150px",
    };
  } else {
    return {
      background: "#111",
      color: "#fff",
      padding: 10,
      borderRadius: 10,
      fontWeight: "bold",
      fontSize: "14px",
      fontFamily: "Google Sans Code",
      width: "200px",
    };
  }
};

const getCategoryStyle = () => {
  if (window.innerWidth >= 400 && window.innerWidth <= 480) {
    return {
      background: "#fff",
      borderRadius: 10,
      padding: 3,
      fontSize: "10px",
      fontFamily: "Google Sans Code",
      width: "80px",
    };
  } else {
    return {
      background: "#fff",
      borderRadius: 10,
      padding: 5,
      fontSize: "12px",
      fontFamily: "Google Sans Code",
      width: "100px",
    };
  }
};

const getNodeStyle = () => {
  if (window.innerWidth >= 400 && window.innerWidth <= 480) {
    return {
      background: "transparent",
      color: "#fff",
      border: "2px solid #fff",
      borderRadius: "10px",
      fontWeight: 500,
      fontSize: "8px",
      fontFamily: "Google Sans Code",
      width: "50px",
      padding: 2,
      textAlign: "center",
    };
  } else {
    return {
      background: "transparent",
      color: "#fff",
      border: "2px solid #fff",
      borderRadius: "10px",
      fontWeight: 500,
      fontSize: "12px",
      fontFamily: "Google Sans Code",
      width: "70px",
      padding: 4,
      textAlign: "center",
    };
  }
};

export const nodes = [
  {
    id: "1",
    position: { x: 120, y: 20 },
    data: { label: "Ida Grufman Johansson" },
    style: getHeadingLabelStyle(),
  },
  {
    id: "2",
    position: { x: 70, y: 80 },
    data: { label: "Tech Stack" },
    style: getCategoryStyle(),
  },
  {
    id: "3",
    position: { x: 300, y: 80 },
    data: { label: "Qualities" },
    style: getCategoryStyle(),
  },

  {
    id: "4",
    position: { x: 10, y: 200 },
    data: { label: "React" },
    style: getNodeStyle(),
  },
  {
    id: "5",
    position: { x: 50, y: 250 },
    data: { label: "Node.js" },
    style: getNodeStyle(),
  },
  {
    id: "6",
    position: { x: 100, y: 200 },
    data: { label: "Java" },
    style: getNodeStyle(),
  },
  {
    id: "7",
    position: { x: 150, y: 150 },
    data: { label: "DevOps" },
    style: getNodeStyle(),
  },

  {
    id: "8",
    position: { x: 200, y: 210 },
    data: { label: "Creative" },
    style: getNodeStyle(),
  },
  {
    id: "9",
    position: { x: 280, y: 220 },
    data: { label: "Driven" },
    style: getNodeStyle(),
  },
  {
    id: "10",
    position: { x: 350, y: 180 },
    data: { label: "Project Leader" },
    style: getNodeStyle(),
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
