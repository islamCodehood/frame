const useShuffle = (endNum: number) => {
  let random = Math.floor(Math.random() * endNum)
  return random
}

export default useShuffle
