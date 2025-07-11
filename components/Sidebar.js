
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'

const initialFolders = [
  { id: '1', title: 'Infectieziekten' },
  { id: '2', title: 'Immuundeficiënties' },
  { id: '3', title: 'Algemene interne geneeskunde' }
]

export default function Sidebar() {
  const [folders, setFolders] = useState(initialFolders)

  const handleDragEnd = (result) => {
    if (!result.destination) return
    const reordered = Array.from(folders)
    const [removed] = reordered.splice(result.source.index, 1)
    reordered.splice(result.destination.index, 0, removed)
    setFolders(reordered)
  }

  return (
    <div style={{ width: '250px', backgroundColor: '#f9f9f9', padding: '1rem' }}>
      <h3>Mappen</h3>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="folders">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {folders.map((folder, index) => (
                <Draggable key={folder.id} draggableId={folder.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: '8px',
                        marginBottom: '4px',
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        cursor: 'move',
                        ...provided.draggableProps.style
                      }}
                    >
                      {folder.title}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
