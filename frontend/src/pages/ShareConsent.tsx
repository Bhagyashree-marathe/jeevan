import { useState } from "react"

type ShareConsentProps = {
  onBack: () => void
}

function ShareConsent({ onBack }: ShareConsentProps) {
  const [consentGiven, setConsentGiven] = useState(false)

  const [healthSummary, setHealthSummary] = useState(true)
  const [medicalHistory, setMedicalHistory] = useState(true)
  const [medications, setMedications] = useState(false)
  const [emergencyInformation, setEmergencyInformation] = useState(true)

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      {/* Mobile App Container */}
      <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

        {/* ================= HEADER ================= */}

        <header className="bg-white px-5 pt-5 pb-4 border-b border-slate-100">

          <button
            type="button"
            onClick={onBack}
            className="mb-4 text-blue-600 font-semibold hover:text-blue-800"
          >
            ← Back
          </button>

          <h1 className="text-xl font-bold text-slate-900">
            Share & Consent
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Control who can access your health information
          </p>

        </header>


        {/* ================= MAIN ================= */}

        <main className="px-5 py-5 pb-10">

          {/* ================= ACCESS REQUEST ================= */}

          <section className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                <span className="text-xl">
                  🏥
                </span>
              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Access requested by
                </p>

                <h2 className="font-bold text-slate-900">
                  Jeevan Healthcare Center
                </h2>

              </div>

            </div>

            <div className="mt-4 rounded-xl bg-blue-50 p-4">

              <p className="text-sm text-blue-800">
                This healthcare provider is requesting access to
                selected medical information.
              </p>

            </div>

          </section>


          {/* ================= INFORMATION TO SHARE ================= */}

          <section className="mt-5">

            <h2 className="mb-3 text-base font-bold text-slate-900">
              Information to Share
            </h2>

            <div className="space-y-3">

              {/* Health Summary */}

              <label className="flex items-center justify-between rounded-xl bg-white p-4 border border-slate-100">

                <div>

                  <p className="font-semibold text-sm text-slate-900">
                    Health Summary
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Basic health information
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={healthSummary}
                  onChange={(e) =>
                    setHealthSummary(e.target.checked)
                  }
                  className="h-5 w-5 accent-blue-600"
                />

              </label>


              {/* Medical History */}

              <label className="flex items-center justify-between rounded-xl bg-white p-4 border border-slate-100">

                <div>

                  <p className="font-semibold text-sm text-slate-900">
                    Medical History
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Previous visits and diagnoses
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={medicalHistory}
                  onChange={(e) =>
                    setMedicalHistory(e.target.checked)
                  }
                  className="h-5 w-5 accent-blue-600"
                />

              </label>


              {/* Medications */}

              <label className="flex items-center justify-between rounded-xl bg-white p-4 border border-slate-100">

                <div>

                  <p className="font-semibold text-sm text-slate-900">
                    Medications
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Current medicines
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={medications}
                  onChange={(e) =>
                    setMedications(e.target.checked)
                  }
                  className="h-5 w-5 accent-blue-600"
                />

              </label>


              {/* Emergency Information */}

              <label className="flex items-center justify-between rounded-xl bg-white p-4 border border-slate-100">

                <div>

                  <p className="font-semibold text-sm text-slate-900">
                    Emergency Information
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Critical information for emergencies
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={emergencyInformation}
                  onChange={(e) =>
                    setEmergencyInformation(e.target.checked)
                  }
                  className="h-5 w-5 accent-blue-600"
                />

              </label>

            </div>

          </section>


          {/* ================= CONSENT STATUS ================= */}

<section className="mt-5 rounded-2xl bg-white p-5 shadow-sm border border-slate-100">

  <div className="flex items-center justify-between">

    <div>

      <h2 className="font-bold text-slate-900">
        Consent Status
      </h2>

      <p className="mt-1 text-xs text-slate-500">
        You control access to your information
      </p>

    </div>

    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        consentGiven
          ? "bg-green-100 text-green-700"
          : "bg-slate-100 text-slate-500"
      }`}
    >
      {consentGiven ? "Granted" : "Not Granted"}
    </span>

  </div>

  {consentGiven && (
    <div className="mt-4 rounded-xl bg-green-50 border border-green-100 p-4">

      <p className="text-sm font-semibold text-green-800">
        Information authorized for sharing:
      </p>

      <ul className="mt-2 space-y-1 text-sm text-green-700">

        {healthSummary && (
          <li>✓ Health Summary</li>
        )}

        {medicalHistory && (
          <li>✓ Medical History</li>
        )}

        {medications && (
          <li>✓ Medications</li>
        )}

        {emergencyInformation && (
          <li>✓ Emergency Information</li>
        )}

      </ul>

    </div>
  )}

</section>


          {/* ================= CONSENT BUTTON ================= */}

          <button
            type="button"
            onClick={() => setConsentGiven(!consentGiven)}
            className={`mt-5 w-full rounded-xl px-5 py-3 font-semibold transition ${
              consentGiven
                ? "bg-red-100 text-red-700 hover:bg-red-200"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {consentGiven
              ? "Revoke Consent"
              : "Give Consent"}
          </button>


          {/* ================= PRIVACY NOTICE ================= */}

          <div className="mt-5 rounded-xl border border-yellow-200 bg-yellow-50 p-4">

            <p className="text-sm text-yellow-800">

              🔒 <strong>Privacy Notice:</strong> Only the information
              you select will be shared. You can revoke consent at any
              time.

            </p>

          </div>

        </main>

      </div>

    </div>
  )
}

export default ShareConsent