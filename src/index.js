import cors from "cors";
import express from "express";
import graphlHTTP from "express-graphql";
import mongoose from "mongoose";
import schema from "./schema";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/notetaking_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const app = express();
const PORT = 4300;

// 타입 버튼 클릭 이벤트
function typeClickHandler(elmnt, type) {
	if (
		$(elmnt).hasClass("btn-clicked") ||
		$(elmnt).hasClass("btn-clicked-this")
	) {
		return false;
	}
	var btnClass = "";
	if (type === "BUY") {
		btnClass = "btn-danger";
		$("#btnSell").addClass("btn-clicked");
		$("#btnSell").removeClass("btn-primary");
	} else if (type === "SELL") {
		btnClass = "btn-primary";
		$("#btnBuy").addClass("btn-clicked");
		$("#btnBuy").removeClass("btn-danger");
	}
	$(elmnt).addClass("btn-clicked-this");
	tmp_type = type;
}

app.use(cors());

app.get("/", (req, res) => {
	res.json({
		message: "Notetaking API v1",
	});
});
app.use(
	"/graphql",
	graphlHTTP({
		schema: schema,
		graphiql: true,
	})
);
app.listen(PORT, () => {
	console.log(`Server is listening on PORT ${PORT}`);
});
