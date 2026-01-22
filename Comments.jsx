import { useEffect, useMemo, useState } from 'react'

const API_BASE = 'https://jsonplaceholder.typicode.com'

const createEmptyForm = () => ({ name: '', body: '' })

function Comments() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [form, setForm] = useState(createEmptyForm)
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState(createEmptyForm)

  const [isCreating, setIsCreating] = useState(false)
  const [savingId, setSavingId] = useState(null)
  const [deletingId, setDeletingId] = useState(null)

  const commentsCount = useMemo(() => comments.length, [comments])

  const fetchComments = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_BASE}/comments?_limit=8`)
      if (!res.ok) throw new Error('Could not load comments.')
      const data = await res.json()
      setComments(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const handleCreate = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.body.trim()) {
      setError('Please fill in all fields.')
      return
    }

    setIsCreating(true)
    setError('')

    try {
      const res = await fetch(`${API_BASE}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, postId: 1 }),
      })
      if (!res.ok) throw new Error('Create failed.')

      const data = await res.json()
      setComments((prev) => [{ ...data, id: data.id ?? Date.now() }, ...prev])
      setForm(createEmptyForm())
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Create failed.')
    } finally {
      setIsCreating(false)
    }
  }

  const startEdit = (comment) => {
    setEditingId(comment.id)
    setEditForm({ name: comment.name, body: comment.body })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm(createEmptyForm())
  }

  const handleUpdate = async (id) => {
    if (!editForm.name.trim() || !editForm.body.trim()) {
      setError('Fill in all fields.')
      return
    }

    setSavingId(id)
    setError('')

    try {
      const res = await fetch(`${API_BASE}/comments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...editForm, id, postId: 1 }),
      })
      if (!res.ok) throw new Error('Update failed.')

      const data = await res.json()
      setComments((prev) =>
        prev.map((c) => (c.id === id ? { ...c, ...data } : c)),
      )
      cancelEdit()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Update failed.')
    } finally {
      setSavingId(null)
    }
  }

  const handleDelete = async (id) => {
    setDeletingId(id)
    setError('')

    try {
      const res = await fetch(`${API_BASE}/comments/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Delete failed.')

      setComments((prev) => prev.filter((c) => c.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed.')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="min-h-screen px-5 py-10 md:px-10">
      <div className="mx-auto max-w-6xl space-y-10">

        {/* Header */}
        <header className="glass rounded-3xl px-6 py-8">
          <p className="text-sm uppercase tracking-widest text-slate-500">
            JSONPlaceholder
          </p>
          <h1 className="mt-2 text-4xl font-bold">Comments CRUD</h1>
          <p className="mt-2 text-slate-600">
            Create, edit and delete comments (mocked API)
          </p>

          <div className="mt-4 flex gap-3">
            <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700">
              {commentsCount} comments
            </span>
            <button
              onClick={fetchComments}
              disabled={loading}
              className="rounded-full bg-slate-900 px-4 py-1 text-sm text-white"
            >
              {loading ? 'Loading...' : 'Refresh'}
            </button>
          </div>

          {error && (
            <div className="mt-4 rounded-xl bg-rose-50 px-4 py-2 text-sm text-rose-600">
              {error}
            </div>
          )}
        </header>

        {/* Main */}
        <section className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">

          {/* Create */}
          <form
            onSubmit={handleCreate}
            className="glass rounded-3xl px-6 py-6 space-y-5"
          >
            <h2 className="text-2xl font-semibold">Create comment</h2>

            <input
              className="w-full rounded-xl border px-4 py-3"
              placeholder="Author name"
              value={form.name}
              onChange={(e) =>
                setForm((p) => ({ ...p, name: e.target.value }))
              }
            />

            <textarea
              className="w-full min-h-[120px] rounded-xl border px-4 py-3"
              placeholder="Comment text..."
              value={form.body}
              onChange={(e) =>
                setForm((p) => ({ ...p, body: e.target.value }))
              }
            />

            <button
              disabled={isCreating}
              className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white"
            >
              {isCreating ? 'Creating...' : 'Add comment'}
            </button>
          </form>

          {/* List */}
          <div className="space-y-4">
            {loading ? (
              <div className="glass rounded-3xl py-10 text-center text-slate-500">
                Loading comments...
              </div>
            ) : (
              comments.map((c) => {
                const isEditing = editingId === c.id

                return (
                  <article
                    key={c.id}
                    className="glass rounded-3xl px-5 py-5"
                  >
                    <p className="text-xs text-slate-400 uppercase">
                      Comment #{c.id}
                    </p>

                    {isEditing ? (
                      <input
                        className="mt-2 w-full rounded-xl border px-3 py-2 font-semibold"
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm((p) => ({ ...p, name: e.target.value }))
                        }
                      />
                    ) : (
                      <h3 className="mt-2 font-semibold">{c.name}</h3>
                    )}

                    {isEditing ? (
                      <textarea
                        className="mt-3 w-full rounded-xl border px-3 py-2"
                        value={editForm.body}
                        onChange={(e) =>
                          setEditForm((p) => ({ ...p, body: e.target.value }))
                        }
                      />
                    ) : (
                      <p className="mt-3 text-sm text-slate-600">{c.body}</p>
                    )}

                    <div className="mt-4 flex gap-2">
                      {isEditing ? (
                        <>
                          <button
                            onClick={() => handleUpdate(c.id)}
                            disabled={savingId === c.id}
                            className="rounded-full bg-slate-900 px-4 py-1 text-xs text-white"
                          >
                            {savingId === c.id ? 'Saving...' : 'Save'}
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="rounded-full border px-4 py-1 text-xs"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => startEdit(c)}
                            className="rounded-full border px-4 py-1 text-xs"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(c.id)}
                            disabled={deletingId === c.id}
                            className="rounded-full border border-rose-200 px-4 py-1 text-xs text-rose-600"
                          >
                            {deletingId === c.id ? 'Deleting...' : 'Delete'}
                          </button>
                        </>
                      )}
                    </div>
                  </article>
                )
              })
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Comments
