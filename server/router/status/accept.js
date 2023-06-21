const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const accept = async (req, res) => {
  //const userId = req.user.id;
  const { isAccept } = req.body;
  const requestId = parseInt(req.params.requestId); // Assuming you're passing the requestId in the URL parameter

  try {
    if (isAccept === "true") {
      const updatedRequest = await prisma.request.update({
        where: {
          requestId: requestId,
        },
        data: {
          status: "Accepted",
        },
      });
    } else {
      const updatedRequest = await prisma.request.update({
        where: {
          requestId: requestId,
        },
        data: {
          status: "Declined",
        },
      });
    }

    return res.status(200).json({
      message: "Request status updated successfully.",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error updating request status.",
    });
  }
};

module.exports = accept;
