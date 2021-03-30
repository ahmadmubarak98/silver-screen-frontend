import faker from "faker";

import { COUNTRY_TO_CITIES } from "~Constants";

import avatar1 from "../../assets/img/1.jpg";
import avatar2 from "../../assets/img/2.jpg";
import avatar3 from "../../assets/img/3.jpg";
import avatar4 from "../../assets/img/4.jpg";
import avatar5 from "../../assets/img/5.jpg";
import avatar6 from "../../assets/img/6.jpg";

const AVATARS = {
  male: [avatar1, avatar2, avatar5, ""],
  female: [avatar3, avatar4, avatar6, ""],
};

const pickRandom = (array) => {
  if (!Array.isArray(array)) return undefined;
  return array[Math.floor(Math.random() * array.length)];
};

const mockEmployeeList = (length) =>
  Array(length)
    .fill({})
    .map((obj) => {
      const country = faker.address.country();
      const city = pickRandom(COUNTRY_TO_CITIES[country]);
      const gender = pickRandom(["male", "female"]);
      const imageUrl = pickRandom(AVATARS[gender]);
      const name = `${faker.name.firstName(gender)} ${faker.name.lastName()}`;

      return {
        country,
        city,
        imageUrl,
        name,
        uuid: faker.random.uuid(),
        email: [faker.internet.email()],
        phone: [faker.phone.phoneNumber("+961 3 ######")],
        designation: faker.name.jobTitle(),
        group: "abdulaziz@silverscreen.com",
      };
    });

export default mockEmployeeList;
