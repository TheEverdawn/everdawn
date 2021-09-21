import { Item, Location } from ".prisma/client";
import { prisma } from "./db";

export function createLocation(
	data: Omit<Location, "id" | "createdAt" | "updatedAt">
) {
	return prisma.location.create({
		data: { ...data },
	});
}

export function getLocationForChannel(channelId: string) {
	return prisma.location.findFirst({
		where: { channel: channelId },
	});
}

export function createItem(data: Omit<Item, "id" | "createdAt" | "updatedAt">) {
	return prisma.item.create({ data });
}

export function getItemsInLocation(locationId: number) {
	return prisma.item.findMany({ where: { locationId } });
}
