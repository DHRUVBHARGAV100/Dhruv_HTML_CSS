
import pandas as pd

# Apni file ka naam yahan daalna
file_path = "FillHistoryDelta_32321663.csv"

# CSV load karo
df = pd.read_csv(file_path)

# Column names check karne ke liye (optional)
print("Columns found in file:", df.columns.tolist())

# Buy aur Sell ko filter karna
total_buys = df.loc[df['Side'].str.lower() == 'buy', 'Value'].sum()
total_sells = df.loc[df['Side'].str.lower() == 'sell', 'Value'].sum()

# Total fees
total_fees = df['Fees paid'].sum()

# Net PnL calculate
net_pnl = total_sells - total_buys - total_fees

# Results print karna
print("\n📊 Trading Summary")
print(f"Total Buy Value   : {total_buys}")
print(f"Total Sell Value  : {total_sells}")
print(f"Total Fees Paid   : {total_fees}")
print(f"✅ Net PnL         : {net_pnl}")
