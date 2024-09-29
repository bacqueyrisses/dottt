import * as React from "react";
import { Heading, Text } from "@react-email/components";

export default function EmailTemplate() {
  return (
    <div
      style={{
        display: "flex",
        fontFamily: "var(--font-ibm)",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <table
        align="center"
        border={0}
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        style={{
          height: 424,
          marginTop: 16,
          marginBottom: 16,
          borderRadius: 12,
          backgroundColor: "#B6BBBE",
          backgroundSize: "100% 100%",
        }}
        width="100%"
      >
        <tbody>
          <tr>
            <td align="center" style={{ padding: 40, textAlign: "center" }}>
              <Text
                style={{
                  margin: "0px",
                  fontWeight: 600,
                  color: "rgb(229,231,235)",
                }}
              >
                “DOTTT” ICON-PACK
              </Text>
              <Heading
                as="h1"
                style={{
                  margin: "0px",
                  marginTop: 4,
                  fontWeight: 700,
                  color: "rgb(255,255,255)",
                }}
              >
                COMPLETED.
              </Heading>
              <Text
                style={{
                  margin: "0px",
                  marginTop: 8,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: "rgb(255,255,255)",
                }}
              >
                Thank you for signing up for the “DOTTT” Icon Pack! We’re
                thrilled to have you on board. You’ll be the first to receive
                updates and exclusive information as we get closer to the
                launch. Stay tuned—exciting things are on the horizon.
              </Text>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
