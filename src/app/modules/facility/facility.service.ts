import { IUser } from "../user/users.interface";
import { IFacility } from "./facility.interface";
import { Facility } from "./facility.model";

export const createFacilityService = async (payload: IFacility) => {
  const result = await Facility.create(payload);
  return result;
};

export const updateFacilityService = async (
  id: string,
  payload: Partial<IFacility>
) => {
  const existsFacility = await Facility.findById(id);
  if (!existsFacility) {
    throw new Error("Facility does not exist");
  }

  const result = await Facility.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
export const deleteFacilityService = async (id: string) => {
  const existsFacility = await Facility.findById(id);
  if (!existsFacility) {
    throw new Error("Facility does not exist");
  }

  const result = await Facility.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const getFacilityService = async () => {
  const result = await Facility.find({ $nor: [{ isDeleted: true }] });
  return result;
};
