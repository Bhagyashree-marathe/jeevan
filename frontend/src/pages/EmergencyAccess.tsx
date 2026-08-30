
import { useState } from "react"

type EmergencyAccessProps = {
  onBack?: () => void
}

function EmergencyAccess({ onBack }: EmergencyAccessProps) {
  const [healthId, setHealthId] = useState("")
  const [showPatientInfo, setShowPatientInfo] = useState(false)

  const patient = {
    name: "Aarav Sharma",
    healthId: "JEEVAN-2026-001",
    bloodGroup: "O+",
    allergies: "No known allergies",
    medications: "None",
    emergencyContact: "+91 XXXXX XXXXX",
  }

  // ================= VERIFY HEALTH ID =================
const handleAccess = () => {
  if (!healthId.trim()) {
    alert("Please enter Health ID")
    return
  }

  if (healthId.trim() !== patient.healthId) {
    alert("Invalid Health ID")
    return
  }

  // Prototype verification
  setShowPatientInfo(true)
}

  // ================= CRITICAL INFORMATION =================
  if (showPatientInfo) {
    return (
      <div className="min-h-screen bg-slate-100 flex justify-center">

        <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

          {/* Header */}
          <header className="bg-white px-5 pt-5 pb-4 border-b border-slate-100">

            <button
              type="button"
              onClick={() => setShowPatientInfo(false)}
              className="mb-4 text-blue-600 font-medium"
            >
              ← Back
            </button>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <span className="text-2xl">
                  🚨
                </span>
              </div>

              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Emergency Information
                </h1>

                <p className="text-sm text-slate-500">
                  Critical information only
                </p>
              </div>

            </div>

          </header>


          <main className="px-5 py-5 pb-10">

            {/* Emergency Access Active */}
            <section className="rounded-2xl border border-red-200 bg-red-50 p-5">

              <div className="flex items-start gap-3">

                <span className="text-xl">
                  ⚠️
                </span>

                <div>

                  <h2 className="font-bold text-red-700">
                    Break-Glass Access Active
                  </h2>

                  <p className="mt-1 text-sm text-red-600">
                    You are viewing limited critical health
                    information for emergency treatment.
                  </p>

                </div>

              </div>

            </section>


            {/* Patient Identity */}
            <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

              <h2 className="text-base font-bold text-slate-900">
                Patient Identity
              </h2>

              <div className="mt-4 space-y-3">

                <div className="flex justify-between border-b border-slate-100 pb-3">

                  <span className="text-sm text-slate-500">
                    Name
                  </span>

                  <span className="text-sm font-semibold text-slate-900">
                    {patient.name}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-sm text-slate-500">
                    Health ID
                  </span>

                  <span className="text-sm font-semibold text-blue-700">
                    {patient.healthId}
                  </span>

                </div>

              </div>

            </section>


            {/* Critical Information */}
            <section className="mt-5">

              <h2 className="mb-3 text-base font-bold text-slate-900">
                Critical Information
              </h2>

              <div className="grid grid-cols-2 gap-3">

                {/* Blood Group */}
                <div className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">

                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">

                    <span className="text-red-600 font-bold">
                      🩸
                    </span>

                  </div>

                  <p className="mt-3 text-xs text-slate-500">
                    Blood Group
                  </p>

                  <p className="mt-1 text-lg font-bold text-red-600">
                    {patient.bloodGroup}
                  </p>

                </div>


                {/* Allergies */}
                <div className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">

                  <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">

                    <span className="text-yellow-600">
                      ⚠
                    </span>

                  </div>

                  <p className="mt-3 text-xs text-slate-500">
                    Allergies
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {patient.allergies}
                  </p>

                </div>

              </div>

            </section>


            {/* Medications */}
            <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

              <h2 className="font-bold text-slate-900">
                Current Medications
              </h2>

              <div className="mt-3 rounded-xl bg-blue-50 p-4">

                <p className="text-sm text-blue-800">
                  💊 {patient.medications}
                </p>

              </div>

            </section>


            {/* Emergency Contact */}
            <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

              <h2 className="font-bold text-slate-900">
                Emergency Contact
              </h2>

              <div className="mt-3 flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    Primary Contact
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {patient.emergencyContact}
                  </p>

                </div>

                <button
                  type="button"
                  className="rounded-xl bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"
                >
                  Call
                </button>

              </div>

            </section>


            {/* Audit Notice */}
            <section className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-5">

              <h2 className="font-bold text-orange-800">
                🔓 Emergency Access Recorded
              </h2>

              <p className="mt-2 text-sm text-orange-700">
                This emergency access is temporary and can be
                recorded in the system audit log.
              </p>

            </section>


            {/* End Access */}
            <button
              type="button"
              onClick={onBack}
              className="w-full mt-5 bg-slate-800 text-white font-semibold py-4 rounded-xl"
            >
              End Emergency Access
            </button>

          </main>

        </div>

      </div>
    )
  }


  // ================= EMERGENCY VERIFICATION =================
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

        {/* Header */}
        <header className="bg-white px-5 pt-5 pb-4 border-b border-slate-100">

          <button
            type="button"
            onClick={onBack}
            className="mb-4 text-blue-600 font-medium"
          >
            ← Back
          </button>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <span className="text-2xl">
                🚨
              </span>
            </div>

            <div>

              <h1 className="text-xl font-bold text-slate-900">
                Emergency Access
              </h1>

              <p className="text-sm text-slate-500">
                Critical health information
              </p>

            </div>

          </div>

        </header>


        <main className="px-5 py-6">

          {/* Warning */}
          <section className="rounded-2xl border border-red-200 bg-red-50 p-5">

            <div className="flex items-start gap-3">

              <span className="text-xl">
                ⚠️
              </span>

              <div>

                <h2 className="font-bold text-red-700">
                  Emergency Mode
                </h2>

                <p className="mt-1 text-sm leading-5 text-red-600">
                  Emergency access allows authorized personnel
                  to view limited critical health information
                  when immediate treatment is required.
                </p>

              </div>

            </div>

          </section>


          {/* Health ID Input */}
          <section className="mt-6 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <h2 className="text-base font-bold text-slate-900">
              Enter Patient Health ID
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Enter the patient's Health ID to continue.
            </p>


            <label className="block mt-5 text-sm font-semibold text-slate-700">
              Health ID
            </label>

            <input
              type="text"
              value={healthId}
              onChange={(e) => setHealthId(e.target.value)}
              placeholder="e.g. JEEVAN-2026-001"
              className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
            />


            <button
              type="button"
              onClick={handleAccess}
              className="w-full mt-5 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl shadow-md transition"
            >
              Access Emergency Information
            </button>

          </section>


          {/* Security Notice */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100">

            <div className="flex gap-3">

              <span className="text-lg">
                🔒
              </span>

              <div>

                <p className="text-sm font-semibold text-slate-800">
                  Privacy & Security
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Only essential emergency information is
                  displayed. Emergency access may be recorded
                  for security and accountability.
                </p>

              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  )
}

export default EmergencyAccess

