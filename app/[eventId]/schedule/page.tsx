'use client';
import { useParams } from 'next/navigation';
import { fakeDB } from '@/lib/fakeDB';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { useState } from 'react';

export default function ScheduleBuilder() {
  const { eventId } = useParams();
  const [games, setGames] = useState([]);

  if (!eventId || typeof eventId !== 'string') return <p>Loading...</p>;

  const event = fakeDB.events[eventId];
  if (!event) return <p>Event not found.</p>;

  // Update state once we have event.games
  if (games.length === 0 && event.games?.length > 0) {
    setGames(event.games);
  }
