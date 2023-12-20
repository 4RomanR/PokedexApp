const gradientByType = {
    grass:"bg-gradient-to-b from-green-500 from-10% via-lime-200 to-emerald-500" ,
    water:"bg-gradient-to-b from-blue-500 to-blue-300",
    ground:"bg-gradient-to-b from-slate-800 from-10% via-slate-500 to-slate-700",
    fire:"bg-gradient-to-b from-red-600 from-5% via-amber-400 to-orange-100 to-95%",
    Fighting:"bg-gradient-to-b from-red-600 from-5% via-amber-400 to-orange-100 to-95%",
    poison:"bg-gradient-to-b from-fuchsia-500 from-5% via-fuchsia-400 to-fuchsia-100 to-95%",
    bug:"bg-gradient-to-b from-emerald-500 from-5% via-amber-400 to-emerald-100 to-95%",
    normal:"bg-gradient-to-b from-pink-800 from-5% via-red-800 to-pink-900 to-95%",
    fairy:"bg-gradient-to-b from-orange-950 from-5% via-amber-400 to-orange-100 to-95%",
    electric:"bg-gradient-to-b from-yellow-700 from-5% via-amber-500 to-yellow-100 to-95%"
  }
  const borderByType = {
    grass:"border-green-500" ,
    water:"border-blue-500",
    ground:"border-slate-500",
    fire:"border-red-500",
    figther:"border-orange-800",
    poison:"border-purple-800",
    bug:"border-emerald-500",
    normal:"border-fuchsia-950",
    fairy:"border-fuchsia-950",
    electric:"border-yellow-500"
  }

  const txtByType = {
    grass:"text-green-500" ,
    water:"text-blue-500",
    ground:"text-slate-500",
    fire:"text-red-500",
    figther:"text-orange-800",
    poison:"text-purple-800",
    bug:"text-emerald-500",
    normal:"text-fuchsia-950",
    fairy:"text-fuchsia-950",
    electric:"text-yellow-500"
  }

  export { txtByType, borderByType, gradientByType}