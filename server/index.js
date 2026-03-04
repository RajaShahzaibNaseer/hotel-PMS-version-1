import supabase from "./utils/supabase.js";
import express from "express"
import cors from "cors"
import blockRoute from "./routes/blockRoute.js"
import floorRoute from "./routes/floorRoute.js";
import roomRoute from "./routes/roomRoute.js";
import roomTypeRoute from "./routes/roomTypeRoute.js"
import amenityRoute from "./routes/amenityRoute.js"
import guestRoute from "./routes/guestRoute.js";
import guestReservationRoute from "./routes/guestReservationRoute.js"


const app = express();
app.use(cors());
app.use(express.json());

app.use("/block",blockRoute);
app.use("/floor",floorRoute);
app.use("/room",roomRoute);
app.use("/roomtype", roomTypeRoute);
app.use("/amenity", amenityRoute);
app.use('/guest',guestRoute);
app.use("/reservation",guestReservationRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});