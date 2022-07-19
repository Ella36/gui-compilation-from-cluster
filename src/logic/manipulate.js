export default async function manipulate(obj, buttonName) {
  console.debug(`new manipulate: ${buttonName}`);
  if (/^New+/.test(buttonName)) {
    const n = Number(buttonName.match(/[0-9]+/)[0])
    return {
      isBoardVisible: obj.isBoardVisible,
    };
  }
  if (buttonName === "ReadCompilation") {
      console.debug("ReadCompilation");
      const comp = await window.electron.readJSON('compilation.json');
      console.debug(comp)
      return {
        compilation: comp
      };
  }
}
