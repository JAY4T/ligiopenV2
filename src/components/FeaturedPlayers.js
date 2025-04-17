import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturedPlayers({ players }) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-[#37003c] border-b-2 border-[#00529f] pb-1">Featured Players</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player, index) => (
          <Card
            key={index}
            className="bg-white text-center shadow hover:shadow-lg transition duration-300 rounded-xl"
          >
            <CardContent className="p-4">
              <img
                src={player.photo}
                alt={player.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-semibold text-[#37003c]">{player.name}</h3>
              <p className="text-sm text-gray-500">{player.club}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
