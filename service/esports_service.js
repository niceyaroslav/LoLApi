import cheerio from "cheerio"
import axios from "axios"

const hujeta = (req, res) => {

    console.log("hujeta")
    console.log(req.query)
    res.json("Hujeta rabotajet!")
}

// const getCurrentLeagueStandings = (req, res) => {
//     axios.get()
// }
const esportsService = {"hujeta": hujeta}
export default esportsService