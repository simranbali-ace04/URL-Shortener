const { nanoid } = require("nanoid");
const Url = require("../models/url");

async function handleGenerateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortId = nanoid(8);
  await Url.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.status(200).json({ id: shortId });
}

async function handleRedirect(req, res) {
  const shortId = req.params.id;
  const entry = await Url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
  );
  res.redirect(entry.redirectUrl);
}

async function handleGetAnaytics(req, res){
    const shortId = req.params.id;
    const result = await Url.findOne({shortId});
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = {
  handleGenerateShortUrl,
  handleRedirect,
  handleGetAnaytics,
};
