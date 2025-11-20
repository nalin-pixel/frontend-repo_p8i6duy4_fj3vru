import { useState } from "react";

const initialForm = {
  full_name: "",
  email: "",
  phone: "",
  service: "Haircut",
  date: "",
  time: "",
  notes: "",
  stylist: "",
};

function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(`${baseUrl}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Failed to book");
      setMessage({ type: "success", text: "Appointment requested! We'll confirm shortly." });
      setForm(initialForm);
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="bg-white/10 border border-white/10 rounded-2xl p-6 text-white backdrop-blur">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input name="full_name" value={form.full_name} onChange={handleChange} required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm mb-1">Service</label>
              <select name="service" value={form.service} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 focus:outline-none">
                <option>Haircut</option>
                <option>Coloring</option>
                <option>Styling</option>
                <option>Treatment</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Date</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm mb-1">Time</label>
              <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 focus:outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Notes</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 focus:outline-none" />
            </div>
          </div>

          {message && (
            <div className={`mt-4 p-3 rounded-lg ${message.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
              {message.text}
            </div>
          )}

          <button disabled={loading} className="mt-4 w-full md:w-auto px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-60 font-semibold">
            {loading ? 'Booking...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
