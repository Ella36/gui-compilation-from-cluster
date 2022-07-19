import ClipArray from "./ClipArray"

async function read_compilation() {
  let compilation = await window.electron.readJSON('compilation.json');
  console.log(`Async compilation with: ${compilation}`)
  console.log(`Async clips : ${compilation.clips}`)
  return {
    n: compilation.n,
    clips: compilation.clips,
    project: compilation.project,
  }
}

async function save_compilation(clipArray) {
  console.log(`Before ${clipArray.csv}`)
  const t = await window.electron.writeFile('compilation.csv', clipArray.csv);
}

export default async function manipulate(obj, buttonName) {
  console.debug(`new manipulate: ${buttonName}`);
  if (/^Up+/.test(buttonName)) {
    console.debug(`Move up`);
    const n = Number(buttonName.match(/[0-9]+/)[0])
    console.debug(`from: ${n}`);
    // Manipulate compilation to move index n 1 space up
    const from = n
    const to = n - 1 < 0 ? 0 : n - 1
    console.debug(`to: ${to}`);
    let clips_swapped = obj.clipArray.swap(to, from)
    return {
      n: obj.n,
      project: obj.project,
      clipArray: clips_swapped,
    };
  }

  if (/^Down+/.test(buttonName)) {
    console.debug(`Move down`);
    const n = Number(buttonName.match(/[0-9]+/)[0])
    console.debug(`from: ${n}`);
    // Manipulate compilation to move index n 1 space up
    const from = n
    const to = n + 1 >= obj.clipArray.amountOfClips ? n : n + 1
    console.debug(`to: ${to}`);
    let clips_swapped = obj.clipArray.swap(to, from)
    return {
      n: obj.n,
      project: obj.project,
      clipArray: clips_swapped,
    };
  }

  if (/^Remove+/.test(buttonName)) {
    console.debug(`Remove`);
    const n = Number(buttonName.match(/[0-9]+/)[0])
    console.debug(`from: ${n}`);
    // Manipulate compilation to move index n 1 space up
    return {
      n: obj.n,
      project: obj.project,
      clipArray: obj.clipArray.removeIndex(n),
    };
  }

  if (buttonName === "SaveCompilation") {
    console.debug("SaveCompilation");
    const t = await save_compilation(obj.clipArray)
    return {
      n: obj.n,
      project: obj.project,
      clipArray: obj.clipArray,
    }
  }

  if (buttonName === "ReadCompilation") {
    console.debug("ReadCompilation");
    const compilation = await read_compilation()
    console.log(`manipulate read : ${compilation.clips}`)
    return {
      n: compilation.n,
      project: compilation.project,
      clipArray: new ClipArray().fill_from_compilation(compilation.clips)
  };
}
}
