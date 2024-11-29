import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config';

export async function geminiClient() {

    const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `Analyze and summarize the following separation agreement.
   SEPARATION AGREEMENT AND GENERAL RELEASE DEFINITIONS
Jason Ross


DEFINITIONS. For purposes of this Separation Agreement and General Release, the following terms shall have the following meanings:

A.	“Employee” shall mean Jason Ross

B.	“Position” shall mean the Employee’s position of: Software Engineer 1

C.	“Last Working Day” shall mean September 25, 2024

 
D.	“Separation Date” shall mean
 
November 25, 2024
 

E.	“Payment” shall mean the following amount:

 
	Numerical value:
 
31,238.86
 


	Amount in words: Thirty One Thousand Two Hundred Thirty Eight Dollars and Eighty Six Cents

 
F.	“Outplacement Period” shall mean
 
2 Months Virtual Professional Support
 

 
G.	“Human Resources Contact” shall mean
 
HRSS@asurion.com
 
SEPARATION AGREEMENT AND GENERAL RELEASE TERMS
Jason Ross

This Separation Agreement and General Release (“Agreement”) is entered into by and between Employee and Asurion, LLC on behalf of itself, its parent, its subsidiaries and affiliates (the “Company”).
Employee and Company agree as follows:
1.	Separation Date. Employee will no longer have any duties or responsibilities with regard to their Position effective the Last Working Day. The Company has paid, or will pay Employee their earned salary, and only where applicable, any accrued but unused vacation, and will reimburse any outstanding expenses after receiving the customary and necessary substantiation from them, as of the Separation Date. Employee is entitled to these payments upon termination of their employment even if they do not execute this Agreement. Employee further acknowledges that they have received all compensation due them, has notified Company of all injuries received, and that the Company has permitted the Employee to take all required leave. Employee further acknowledges and agrees that they are not permitted to execute this Agreement until the Separation Date.
2.	Consideration to Employee. In consideration for the promises and releases contained in this Agreement, the Company will:
a.	Make the Payment to Employee, less all applicable withholdings. The Payment shall be made no later than 45 days following Employee’s execution of the Agreement, provided, however, that no payment shall be made unless i) Employee’s Separation Date has passed; ii) the revocation period provided for in Paragraph 7 of this Agreement, where applicable, has expired; and iii) this Agreement is still in effect at the time payment is due. If the 45-day period spans two taxable years, the payment will be made in the later tax year regardless of when the Agreement is signed and notwithstanding any other provisions of this Agreement to the contrary.
b.	Provide Employee with outplacement services through a vendor of the Company’s choice for the duration of the Outplacement Period.
3.	Release and Waiver by Employee. Employee does hereby, on behalf of themself, their heirs, representatives, attorneys, executors, successors, administrators, and assigns, knowingly and voluntarily forever discharge and release the Company, its affiliates, subsidiaries, parent companies, officers, directors, employees, agents, attorneys, representatives, and their respective predecessors, successors and assigns, and all persons acting under, by, through, or in concert with any of them, and each of them, (all of whom are hereinafter referred to as “Releasees”) from any and all actions, grievances, obligations, costs, expenses, losses, suits, debts, claims, demands, liabilities, rights, damages, causes of action, and benefits, of whatever character, in law or in equity, known or unknown, suspected or unsuspected, matured or unmatured, of any kind or nature whatsoever, based on any act, omission, event, occurrence, or nonoccurrence from the beginning of time to the date Employee
 
signs this Agreement, including but not limited to, any claims or causes of action arising out of or in any way relating to Employee’s employment with the Company or its termination.
Employee agrees that this release of claims includes, but is not limited to, claims for breach of any implied or express contract or covenant; claims for promissory estoppel; claims of entitlement to any pay (other than the compensation promised in Paragraph 2); any claim for attorneys’ fees and/or costs incurred by the Employee; claims of wrongful denial of insurance and employee benefits, including but not limited to, claims for wrongful denial of disability benefits or retirement benefits under the Company’s benefit plans, or any other plan; or the causing or aggravation of any alleged medical condition; claims for wrongful termination, breach of implied contract or implied covenant or any similar action; public policy violations; defamation, invasion of privacy, fraud, misrepresentation, negligence, gross negligence, bad faith, emotional distress or other common law or tort causes of action; claims of harassment, retaliation, or discrimination under federal, state, or local law; claims based on any federal, state, or other governmental statute, regulation, or ordinance, including, without limitation, Title VII of the Civil Rights Act of 1964, as amended, the Civil Rights Act of 1866, the Civil Rights Act of 1871, the Civil Rights Act of 1991, the Americans with Disabilities Act, the Americans with Disabilities Act Amendments Act of 2008, the Equal Pay Act, the Employee Retirement Income Security Act of 1974 (not as to vested benefits), the Age Discrimination in Employment Act, and/or the Worker Adjustment and Retraining Notification Act, and as applicable, the California Fair Employment and Housing Act, both the federal and the California Worker Adjustment and Retraining Notification Act, the California Labor Code (including, without limitations, the California Private Attorney General Act) (except for Section 2802 and the provisions relating to Workers’ Compensation), Wage Orders of the California Industrial Welfare Commission and/or the California Constitution and/or California constitution, to the extent permissible by law.
State-specific claims, if any, that are required by law to be specifically identified that Employee is releasing in this Agreement and other state-specific modifications, if any, are contained in Exhibit A. You are instructed to carefully review Exhibit A for the state where you reported to work while employed with the Company.
4.	Release of Unknown Claims. For the purpose of implementing full and complete releases, the parties expressly acknowledge that the releases given in this Agreement are intended to include, without limitation, claims that they did not know or suspect to exist in their favor at the time of the effective date of this Agreement, regardless of whether the knowledge of such claims, or the facts upon which they might be based would materially have affected the settlement of this matter; and that the consideration given under the Agreement was also for the release of those claims and contemplates the extinguishment of any such unknown claims.
To the extent California law applies: Waiver of Section 1542. Employee hereby state that it is Employee’s intention in executing this Agreement that it shall be effective as a bar to each and every claim, demand, cause of action, obligation, damage, liability, charge, attorneys’
 
fees, and costs hereinabove released. Employee hereby expressly acknowledges and waives all rights and benefits arising under the provisions of Section 1542 of the Civil Code of the State of California, which provides:
A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS THAT THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT TO EXIST IN THEIR FAVOR AT THE TIME OF EXECUTING THE RELEASE AND THAT, IF KNOWN BY THEM WOULD HAVE MATERIALLY AFFECTED THEIR SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY.
In connection with such waiver and relinquishment, Employee hereby acknowledges that Employee may hereafter discover claims or facts in addition to, or different from, those which you now know or believe to exist, but that Employee expressly agrees to fully, finally, and forever settle and release any and all claims, known or unknown, suspected or unsuspected, which exist or may exist on Employee’s behalf against the Releasees at the time of execution of this Agreement.
5.	Covenant Not to Sue. Except as described below, Employee agrees and covenants not to file any suit against Releasees in any court or administrative agency, with respect to any claim, demand, liability or obligation arising out of Employee’s employment with the Company or the separation therefrom.
Employee further represents that no claims, charges, or other proceedings are pending in any court, administrative agency, commission, or other form relating directly or indirectly to Employee’s employment with the Company.
Nothing in this Agreement shall be construed to prohibit the Employee from filing a charge with or participating in any investigations or proceedings conducted by the Equal Employment Opportunity Commission (“EEOC”), the National Labor Relations Board (“NLRB”), the Occupational Safety and Health Administration (“OSHA”), the U.S. Securities and Exchange Commission (“SEC”), the California Department of Fair Employment and Housing, or comparable federal, state, or local agencies. Employee further understands that this Agreement does not limit Employee’s ability to communicate with any government agencies or otherwise participate in any investigation or proceeding that may be conducted by any government agency, including providing documents or other information, without notice to the Company. This Agreement also does not limit Employee’s right to receive an award for information provided to any government agencies. Notwithstanding the foregoing, to the full extent permitted under applicable law, Employee agrees to waive Employee’s rights to recover monetary damages in any charge, complaint, or lawsuit filed by EEOC or raised in any class or collective action on Employee’s behalf.
If Employee violates this Paragraph of the Agreement, Employee shall be liable to the Company for the Company’s reasonable attorneys’ fees and other litigation costs incurred in defending against such a suit.
 
In addition, if Employee sues the Company in violation of this Agreement, Employee shall be obligated to promptly return all payments made to Employee under this Agreement except $500.00.
However, either party may bring a claim against the other to enforce this Agreement without violating this Agreement.
6.	Successors. This Agreement shall be binding upon the parties, and their heirs, representatives, executors, administrators, successors, insurers, and assigns, and shall inure to the benefit of each and all of the Releasees, and to their heirs, representatives, executors, administrators, successors, and assignees.
7.	Waiver of Age Discrimination Claims and Revocation Period. Employee acknowledges and agrees that the Company has advised and encouraged them to consult with an attorney regarding this Agreement prior to signing below and that they have been given a period of at least forty-five (45) days within which they considered this Agreement and the waiver of any claims under the Age Discrimination in Employment Act “ADEA” and the other laws set forth in Paragraphs 3 and 4 above, and if applicable, Exhibit A, before signing below, if they so desired.
Employee agrees and understands that they may revoke this Agreement and their waiver of Age Discrimination in Employment Act claims within seven (7) days after their execution of this Agreement, and that the Agreement shall not become effective or enforceable until at least seven (7) days after the date on which they sign below. Any revocation must be in writing and delivered by hand or certified mail to the Company’s General Counsel at 140 11th Avenue, North, Nashville, Tennessee 37203. Failure to revoke within seven (7) days will result in the waiver being permanent. If Employee revokes within seven (7) days, the entire Agreement is void. If Employee does not revoke their signature during the 7-day revocation period, the Agreement will become effective on the next calendar day (“Effective Date”).
The Company has attached a disclosure of certain information pursuant to the Older Workers Benefit Protection Act.
8.	Absence of Certain Claims. Employee acknowledges and agrees that:
a.	as of the date Employee signs this Agreement, Employee has not filed or otherwise pursued any charges, complaints, or claims of any nature against the Company or any Releasees with any local, state, or federal government agency or court on or prior to the date of signing this Agreement, which have not been dismissed, closed, withdrawn, or otherwise terminated, unless otherwise permitted by law. Employee further acknowledges that the
 
Company has fully satisfied all of its obligations to Employee as a matter of law and pursuant to Company policy, and Employee has no additional claims against the Company.
b.	except for benefits under any Company plans that have vested or will vest according to the terms of those plans, the Company has and shall have no obligation to provide Employee with any payments, benefits, or consideration other than as described herein.
c.	as a Company employee, it has been Employee’s obligation to advise the Company completely and candidly of all facts of which Employee is aware that constitute or might constitute violations of the Company’s ethical standards or legal or regulatory obligations. Employee represents and warrants that they are not aware of any such facts or that Employee has previously advised the Company about any such facts. Employee further agrees that Employee will advise the Company in the future of all such facts that may come to Employee’s attention.
9.	Confidential Information. Employee acknowledges that in the course of their employment by the Company, Employee has had access to Confidential Information relating to the business and affairs of the Company, including, without limitation, trade secrets, designs, technology, know-how, processes, data, ideas, techniques, inventions (whether patentable or not), works of authorship, formulas, business and development plans, customer lists, terms of compensation and performance levels of the Company’s employees, information regarding the Company’s facilities, processes, operating procedures, financial data, purchasing practices, marketing, management procedures, books and records, employee or personnel data, contractual arrangements or proposals, properties and affairs of the Company, as well as the Company’s business plans and budgets, and information concerning the Company’s actual or anticipated business, research, and development (collectively, “Confidential Information”). Employee agrees that following the Separation Date, to the full extent permitted under applicable law, Employee will not, at any time, directly or indirectly, for any reason whatsoever, with or without cause, unless pursuant to a lawful subpoena, breach the confidentiality of the information by using, disseminating, or disclosing any of the Company’s Confidential Information to any person or entity, nor will Employee use any Confidential Information in competing with the Company for any purpose. It is expressly understood that the Confidential Information covered by this Paragraph 9 only includes the Company’s confidential or proprietary information, and therefore does not include information that is generally available to the public. The Company may specifically enforce this provision through an action at law or in equity at any time the Company deems necessary. Nothing in this Agreement prohibits Employee from providing truthful information to any government official or agency or to a court or judicial body in response to a subpoena or court order.
10.	Confidentiality of Agreement. Employee desires this Agreement to be confidential and that such confidentiality is to the mutual benefit of both Employee and Employer. Employee agrees that they will not disclose, or cause to be disclosed, the fact that this Agreement exists or the terms of this Agreement (including, but not limited to, the fact that Employee received consideration pursuant to this Agreement and the amount of consideration
 
that Employee received pursuant to this Agreement), to any third party, whether orally or in writing, except to Employee’s attorneys, accountants, and/or tax advisors, or to any government agency or official or to the extent otherwise required by law, but only on the condition that Employee advises such individual(s) in advance of disclosure that the existence, terms, and conditions of this Agreement are strictly confidential and the individual(s) agree to be bound by this Agreement's confidentiality provisions. Employee further agrees that the consideration in Paragraph 2 above is bargained for and specifically includes consideration for the confidentiality obligations in Paragraph 10.
11.	Return of Company Materials. None of Company’s equipment or materials shall be transferred to Employee. On or before the Separation Date, Employee must return or relinquish all company credit cards, phone cards, computers, office space, furniture, equipment, files, books, documents, and other Company materials in their possession by delivery to your Human Resources Contact.
12.	Cooperation. To the extent not prohibited under applicable state law, Employee agrees not to encourage, counsel, assist, or in any way aid any other individual or entity in making or pursuing any claim of any nature whatsoever against any of the Releasees. Notwithstanding the foregoing, nothing in this Paragraph 12 shall be construed to prevent Employee from assisting or participating as required by law in any investigation conducted by a governmental agency or from providing evidence pursuant to a subpoena served on them in connection with any court, agency, or other action. Employee agrees that they will provide reasonable cooperation to the Company as needed and in response to the Company’s requests in matters relating to the business and operations of the Company, including but not limited to, responding to telephone calls from the Company, addressing questions regarding matters at the Company, cooperating with the Company’s officers, directors, and agents, and responding to any internal or governmental inquiries in good faith and with truthful information regarding matters which occurred during their employment.
13.	Protective Covenants. Employee agrees that the covenants below are (a) reasonable and necessary for the protection of the legitimate business interests of the Company,
(b) not against the public interest, and (c) do not place an unreasonable burden upon Employee’s ability to earn a living.
13.1	Definitions.
A.	“Affiliate” means the Company’s successors in interest, affiliates, subsidiaries, parents, purchasers, or assignees.
B.	“Covered Customer” is a customer (person or entity) of the Company or an Affiliate that Employee had business-related contact or dealings with, or received Confidential Information about, in the Look Back Period (defined below). Covered Customers do not include a customer of the Company or an Affiliate who has fully and finally decided to cease doing business with the Company or the Affiliate due to no fault of Employee’s or breach of this
 
Agreement, and who have, in fact, ceased doing any business with the Company for at least 180 days immediately prior to Employee’s Separation Date.
C.	“Conflicting Product or Service” is a product and/or service that is the same or similar in function or purpose to a Company product and/or service, such that it would replace or compete with: a product and/or service the Company provides to its customers and regarding which Employee had business dealings or received Confidential Information during the Look Back Period; or a product or service that is under development or planning by the Company but not yet provided to customers and regarding which Employee was provided Confidential Information during the Look Back Period. Conflicting Products or Services do not include a product or service of the Company if the Company is no longer in the business of providing such product or service to its customers at the relevant time of enforcement.
D.	“Competing Activities” are any activities or services undertaken on behalf of a Competing Business that are the same or similar in function or purpose to those Employee performed for the Company in the Look Back Period, or that are otherwise probable or likely to result in the use or disclosure of Confidential Information. Competing Activities are understood to exclude: activities on behalf of an independently operated subsidiary, division, or unit of a diversified corporation or similar business that has common ownership with a Competing Business so long as the independently operated business unit does not involve a Conflicting Product or Service; and, a passive and non-controlling ownership interest in a Competing Business through ownership of less than 2% of the stock in a publicly traded company.
E.	“Competing Business” is any person or entity engaged in the business of providing a Conflicting Product or Service, including but not limited to, Allstate/SquareTrade (incl. iCracked), AmTrust/Warrantech, Assurant (incl. Cell Phone Repair (CPR), HYLA, The Warranty Group, T-Mobile Store Repairs), Apple, AIG/ServiceNet, Best Buy, Likewize, GENCO, ProtectCell/Fortegra, Phobio, BatteriesPlus, Servify, AKKO, EverythingBreaks.com, Fixt, WeFix, and Kingfisher.
F.	“Restricted Area” means the Company’s area of legitimate competitive concern based on Employee’s responsibilities to the Company, knowledge of Confidential Information, and goodwill with customers, clients, business partners, dealers and agents as it exists in view of all relevant facts and circumstances. Therefore, if Employee’s responsibilities are sales or marketing, then the Restricted Area is the territory over which Employee had sales or marketing responsibilities during the Look Back Period. If Employee’s responsibilities to the Company are nationwide in scope (such as, by way of example, Employee’s executive, corporate, or administrative responsibilities), then the Geographic Area is the United States. Otherwise, the Geographic Area is understood to be the area within a 50 mile radius of the location(s) to which Employee reported or was assigned during the Look Back Period.
G.	“Look Back Period” is the two (2) year period preceding Employee’s Separation
Date.
 
13.2	Restriction on Interfering with Employee Relationships. Employee agrees that for a period of twelve (12) months following Employee’s Separation Date, Employee will not interfere with the Company’s business relationship with a Company employee, by: (a) soliciting or communicating with such an employee to induce or encourage them to leave the Company’s employ (regardless of who first initiates the communication); (b) helping another person or entity evaluate a Company employee as an employment candidate; or (c) otherwise helping any person or entity hire an employee away from the Company; unless a duly authorized Company officer gives Employee written authorization to do so. Where required by state law, the foregoing restriction will only apply to employees with whom Employee had material business-related contact or about which Employee received Confidential Information, within the Look Back Period. This provision is limited to Company employees who were employed by the Company as of Employee’s Separation Date, at any time during the ninety-day (90) period immediately following Employee’s Separation Date, or within ninety (90) days preceding Employee’s Separation Date.
13.3	Restriction on Interfering with Customer Relationships. Employee agrees that for a period of twelve (12) months after Employee’s Separation Date, Employee will not interfere with the Company’s business relationships with a Covered Customer by soliciting or communicating (regardless of who initiates the communication) with a Covered Customer to induce or encourage the Covered Customer to: (a) stop or reduce doing business with the Company or an Affiliate, or (b) to buy a Conflicting Product or Service; unless a duly authorized Company officer gives Employee written authorization to do so. The parties agree this restriction is inherently reasonable because it is limited to the places or locations where the Covered Customer is doing business at the time.
13.4	Restriction Against Unfair Competition. To the greatest extent permissible under the applicable state law, Employee agrees that for a period of twelve (12) months following Employee’s Separation Date, Employee will not participate in, supervise, or manage (as an employee, consultant, contractor, officer, owner, director, or otherwise) Competing Activities in the Restricted Area. Employee further agrees that the consideration in Paragraph 2 above is bargained for and specifically includes consideration for the obligations in Paragraph 13.4.
13.5	Survival of Restrictions. Employee will advise any future employer of the restrictions in this Agreement before accepting new employment. The post-employment restrictions provided for in this Agreement shall survive the termination of Employee’s employment with the Company. If Employee fails to comply with a time-limited restriction in this Agreement, the time period applicable to the restriction shall be extended by one day for each day Employee is found to have violated the restriction up to a maximum period of twelve
(12) calendar months.
13.6	State Specific Modifications. State-specific modifications of this Agreement, if any, are contained in Exhibit A.
 
14.	Defense of Claims. Employee agrees that for a period of two (2) years after Employee’s Separation Date, upon request from the Company, Employee will cooperate with the Company in the defense of any claims or actions that may be made by or against the Company that affect Employee’s prior areas of responsibility, except if Employee’s reasonable interests are adverse to the Company in such claim or action. The Company agrees to promptly reimburse Employee for all of Employee’s reasonable travel and other direct expenses incurred, or to be reasonably incurred, to comply with Employee’s obligations under this Paragraph 14, subject to Employee’s submission to the Company of documentation substantiating such reasonable expenses as the Company may require.
15.	Non-Admission of Liability. This Agreement is not an admission by Employee or Company of any wrongdoing or liability.
16.	No Future Employment. To the extent not prohibited by applicable state law, Employee agrees that they waive any right to reinstatement or future employment with Company or any of its affiliates following Employee’s separation from Company on the Separation Date.
17.	Resignation of Offices and Directorships. Employee hereby resigns all directorships and board or committee memberships Employee holds within the Company and/or any other entity as a result of employment with the Company. This resignation will be effective as of the Separation Date or such other date as requested by the Company.
18.	Arbitration. Except as provided below, any controversy or claim arising out of or relating to this Agreement or Employee’s employment with, separation from, and/or affiliation with Company, shall be settled by final and binding arbitration in accordance with the Employment Dispute Resolution Rules of the American Arbitration Association, and judgment upon the award rendered by the arbitrator may be entered in any court having jurisdiction. Both parties acknowledge that this Agreement and any actions or proceedings pursuant to it are covered and governed by the Federal Arbitration Act (“FAA”) and that the parties to the Agreement are subject to the FAA.
The only legal disputes and claims not covered by this Agreement are claims: (a) for workers’ compensation benefits, for unemployment benefits, or for other employment-related benefits under a plan or collective bargaining agreement that provides its own process for dispute resolution; (b) for alleged violations of the National Labor Relations Act; (c) constituting sexual harassment or sexual assault disputes as defined by the FAA; (d) for which this Agreement would be invalid or prohibited as a matter of federal law or state or local law that is not preempted by federal law; (e) to enforce this Agreement, compel arbitration, or enforce, modify, or vacate an arbitrator’s award, with such actions to be governed by the FAA; or (f) filed with a federal, state, or local administrative agency such as the Equal Employment Opportunity Commission or National Labor Relations Board.
19.	Entire Agreement. It is agreed and acknowledged that this Agreement, including Exhibit A, represents the entire agreement between the parties on this subject, and
 
that this Agreement supersedes any prior written or oral agreements and understandings. This Agreement may only be modified by a written amendment signed and agreed to by all parties.
20.	Agreement is Voluntary. Employee understands and agrees that they:
a.	have had a reasonable time within which to consider this Agreement before executing it;
b.	have carefully read and fully understand all of the provisions of this Agreement, including Exhibit A and the disclosure of certain information provided pursuant to the Older Workers Benefit Protection Act;
c.	are, through this Agreement, releasing Company and the other Releasees from any and all claims they or their heirs may have against Company and the other Releasees, but is not releasing any claim that may arise after the execution of this Agreement;
d.	knowingly and voluntarily agree to all of the terms set forth in this Agreement, and intend to be legally bound by the same; and
e.	have received consideration for entering into this Agreement beyond which they would otherwise be legally entitled to receive at this time.
21.	Full and Independent Knowledge. The parties represent that they have had the opportunity to discuss thoroughly all aspects of this Agreement with their respective attorneys, fully understand all of the provisions of the Agreement, and are voluntarily entering into this Agreement.
22.	Governing Law; Consent to Personal Jurisdiction. Unless otherwise required by state law, this Agreement will be governed by the laws of the state in which Employee last resided while employed by the Company. Employee hereby expressly consents to the personal jurisdiction of the state and federal courts located in Davidson County, Tennessee for any lawsuit or controversy not otherwise subject to arbitration, filed there against Employee by the Company arising from or relating to this Agreement.
23.	Miscellaneous. Employee agrees that, except as provided by this Agreement, Employee is not entitled to any income, payments, salaries, or other financial benefits from Company. The parties agree that this Agreement will not be introduced as evidence in any proceeding, except that it may be used as evidence in a subsequent proceeding in which either of the parties alleges a breach of this Agreement or as a defense to any claim brought by either party.
24.	Severability. The parties agree that each provision of this Agreement shall be construed as separable and divisible from every other provision and that the enforceability of any one provision shall not limit the enforceability, in whole or in part, of any other provision in this Agreement. In the event that a court of competent jurisdiction or arbitrator finds any term
 
or provision of the Agreement to be invalid or unenforceable, the remaining terms and provisions of this Agreement shall not be affected and shall be interpreted as if the invalid term or provision were not a part of this Agreement. If any provision of this Agreement is held to be unenforceable as to time, scope or otherwise, it shall be construed by limiting and reducing it so as to be enforceable under then applicable law.
25.	Medicare Benefits Acknowledgment. Employee affirms that Employee is not, and has never been, a recipient of Medicare benefits. Employee further affirms that Employee has not sought medical treatment or incurred medical costs (either on behalf of Employee or through Medicare) in relation to or as a result of Employee’s employment with Employer or any claims against Employer. Employee agrees to indemnify and hold the Employer and the Releasees harmless from any and all liability, including, without limitation, all penalties, interest and other costs that may be imposed by the Centers for Medicare and Medicaid Services for any reimbursement obligation that may arise from the monetary consideration made to the Employee under this Agreement.
26.	Counterparts and Electronic Delivery. This Agreement may be executed in counterparts, each of which will be deemed an original. A facsimile, telecopy, or other reproduction hereof may be executed by one or more parties hereto, and an executed copy of this Agreement may be delivered by one or more parties by facsimile or similar electronic transmission device pursuant to which the signature of or on behalf of such party can be seen, and such execution and delivery will be considered valid, binding, and effective for all purposes.
27.	Waiver. The failure or delay by either party to enforce performance by the other party of any provision of this Agreement or to exercise any right under this Agreement will not be construed as a waiver of that party’s right to assert or rely upon any provision of this Agreement or any such right in that or any other instance. Any waiver of any provision hereof shall be limited to the specific circumstances to which it applies and will not be construed as a waiver of any other provision hereof or of the same provision with respect to any other circumstances.


[INTENTIONALLY LEFT BLANK]
 
Exhibit A











STATE-SPECIFIC MODIFICATIONS
 
Exhibit A – Alabama
For an Employee who was an Alabama resident at the time of his or her Separation Date or was otherwise subject to the laws of Alabama during the Look Back Period, the Agreement is modified as follows:
1.	The provisions of Paragraph 13.2 shall be amended as follows: Employee agrees that for a period of twelve (12) months following Employee’s Separation Date, Employee will not interfere with the Company’s business relationship with a Company employee that is uniquely essential to the management, organization, or service of the business by: (a) soliciting or communicating with such an employee to induce or encourage them to leave the Company’s employ (regardless of who first initiates the communication); (b) helping another person or entity evaluate a Company employee as an employment candidate; or (c) otherwise helping any person or entity hire an employee away from the Company; unless a duly authorized Company officer gives Employee written authorization to do so. Where required by state law, the foregoing restriction will only apply to employees with whom Employee had material business- related contact or about which Employee received Confidential Information, within the Look Back Period. This provision is limited to Company employees who were employed by the Company as of Employee’s Separation Date, at any time during the ninety-day (90) period immediately following Employee’s Separation Date, or within ninety (90) days preceding Employee’s Separation Date.
 
Exhibit A – Arizona
For an Employee who was an Arizona resident at the time of his or her Separation Date or was otherwise subject to the laws of Arizona during the Look Back Period, the Agreement is modified as follows:
1.	Nothing in this Agreement prohibits Employee from responding to a peace officer’s or prosecutor’s inquiry or making a statement initiated by Employee in a criminal proceeding in relation to a violation of A.R.S. title 13, chapters 14 or 35
2.	The restrictions in Paragraph 13.3 will only apply within the Restricted Area.
 
Exhibit A – California

For an Employee who was a California resident at the time of his or her Separation Date or was otherwise subject to the laws of California during the Look Back Period, the Agreement is modified as follows:
1.	Paragraph 10. Confidentiality of Agreement is supplemented to include the following language:
Notwithstanding the foregoing, Employee understands that nothing in this Agreement precludes Employee from disclosing factual information (other than the amount of any settlement) related to any claim against Releasees of harassment or discrimination or any other conduct Employee has reason to believe to be unlawful, or from disclosing factual information related to an administrative claim or civil action concerning sexual assault, sexual harassment, workplace harassment or discrimination, failure to prevent an act of workplace harassment or discrimination, or an act of retaliation against a person for reporting or opposing harassment or discrimination that was filed in a civil or administrative action.
2.	The provisions of Paragraph 13.2 shall not apply.
3.	The provisions of Paragraph 13.3 shall be amended as follows:
Restriction on Interfering with Covered Customer Relationships. During employment with the Company, and for eighteen (18) complete calendar months thereafter, Employee will not, directly or indirectly, use the Company’s trade secrets to interfere with the relationship between the Company and a Customer. It shall be considered a prohibited act of interference for Employee to use the Company’s trade secrets to participate in soliciting, encouraging, or inducing a Covered Customer (a) to do business with a Competing Business, or
(b) to stop or reduce doing business with the Company, except where such conduct is expressly authorized in writing by an authorized officer of the Company. The parties stipulate that this restriction is inherently limited to a reasonable geography or geographic substitute because it is limited to the place or location where the Covered Customer is located at the time.
4.	The provisions of Paragraph 13.4 shall not apply.
5.	No provision or requirement of the Agreement will be construed or interpreted in a manner contrary to the public policy of the State of California.
 
Exhibit A – Colorado

For an Employee who was a Colorado resident at the time of his or her Separation Date or was otherwise subject to the laws of Colorado during the Look Back Period, the Agreement is modified as follows:
1.	The provisions of Paragraph 13.3 shall not apply.
2.	The provisions of Paragraph 13.4 shall not apply.
 
Exhibit A – Georgia
For an Employee who was a Georgia resident at the time of his or her Separation Date or was otherwise subject to the laws of Georgia during the Look Back Period, the Agreement is modified as follows:
1.	Paragraph 13.3 is amended as follows: Employee agrees that for a period of twelve (12) months after Employee’s Separation Date (the “Restricted Period”), Employee will not, directly or indirectly, interfere with the relationship between the Company and a Covered Customer of the Company that Employee served while Employee was employed with the Company, unless an authorized Company officer gives me written permission to do so. It shall be considered a prohibited act of interference for Employee, during the Restricted Period, to participate in soliciting, encouraging, or inducing such Covered Customer (a) to do business with a Competing Business, or (b) to stop or reduce doing business with the Company, except where such conduct is expressly authorized in writing by an authorized officer of the Company. The parties agree this restriction is inherently reasonable because it is limited to only those Covered Customers of the Company who Employee served while employed by the Company and because such limitation applies only during the Restricted Period.
2.	Paragraph 13.4 is amended as follows: Employee acknowledges that, in the course of their employment with the Company, they (1) customarily and regularly solicited for the Company customers or prospective customers, (2) customarily and regularly engaged in the making of sales or obtaining of orders or contracts for products or services to be performed by others; or (3) performed the following duties: (a) had the primary duty of managing the enterprise in which Employee is or was employed or of a customarily recognized department or subdivision thereof; (b) customarily and regularly directed the work of two or more other employees; and (c) had the authority to hire or fire other employee or having particular weight given to the suggestions and recommendations as to the hiring, firing, advancement, promotion, or any other change of status of other employees, or (4) performed the duties of a key employee or of a professional. Accordingly, and as consideration for this Agreement, Employee agrees to the following restrictions:
Employee agrees that, during the twelve (12) month period following Employee’s Separation Date, Employee will not, directly or indirectly, provide services of the type conducted, authorized, offered, or provided within two years prior to the Employee’s Separation Date to a person or entity that markets products and services in competition with those provided by the Company to its Covered Customers within a 50 mile radius of the location(s) to which Employee was assigned or worked during the Look Back Period.
 
Exhibit A – Illinois

For an Employee who was an Illinois resident at the time of his or her Separation Date or was otherwise subject to the laws of Illinois during the Look Back Period, the Agreement is modified as follows:
1.	The provisions of Paragraph 13.3 shall not apply.
2.	The provisions of Paragraph 13.4 shall not apply.
 
Exhibit A – Louisiana
For an Employee who was a Louisiana resident at the time of his or her Separation Date or was otherwise subject to the laws of Louisiana during the Look Back Period, the Agreement is modified as follows:
1.	Paragraph 13 shall be amended to read as follows:
13.1	Definitions.
E.	“Competing Business” is any person or entity engaged in the business of providing a Conflicting Product or Service. Entities engaged in the same type of business as Asurion Business, as defined below, are indeed competitors, including but not limited to, Allstate/SquareTrade (incl. iCracked), AmTrust/Warrantech, Assurant (incl. Cell Phone Repair (CPR), HYLA, The Warranty Group, T-Mobile Store Repairs), Apple, AIG/ServiceNet, Best Buy, Likewize, GENCO, ProtectCell/Fortegra, Phobio, BatteriesPlus, Servify, AKKO, EverythingBreaks.com, Fixt, WeFix, and Kingfisher.
F.	“Restricted Area” means the Company’s area of legitimate competitive concern based on Employee’s responsibilities to the Company, knowledge of Confidential Information, and goodwill with customers, clients, business partners, dealers and agents as it exists in view of all relevant facts and circumstances. Therefore, if Employee’s responsibilities are sales or marketing, then the Restricted Area is the territory over which Employee had sales or marketing responsibilities during the Look Back Period. The Geographic Area is understood to be the area within a 50 mile radius of the location(s) to which Employee reported or was assigned during the Look Back Period.
H.  “Asurion Business” means the insurance, warranty, installation, retail sales, set up, repair, replacement, and 24/7 technology support services that Asurion provides on a global basis, for a wide range of household and business devices, including but not limited to, smartphones, cellular telephones, phone accessories, handheld digital electronic devices, game consoles, handheld computers, tablet computers, laptop computers, desktop computers, and household appliances.
2.	Paragraph 13.3 is amended to remove the phrase “(regardless of who initiates the communication)”.
The enforcement of the restrictions in Paragraphs 13.3 and 13.4 will be limited within the State of Louisiana to the Parishes in which Employee assisted the Company in providing its products and services, as are indicated by circling below:

Acadia	Allen	Ascension	Assumption
Avoyelles	Beauregard	Bienville	Bossier
Caddo	Calcasieu	Caldwell	Cameron
Catahoula	Claiborne	Concordia	De Soto
 
East Baton Rouge	East Carroll	East Feliciana	Evangeline
Franklin	Grant	Iberia	Iberville
Jackson	Jefferson	Jefferson Davis	Lafayette
Lafourche	La Salle	Lincoln	Livingston
Madison	Morehouse	Natchitoches	Orleans
Ouachita	Plaquemines	Pointe Coupee	Rapides
Red River	Richland	Sabine	St. Bernard
St. Charles	St. Helena	St. James	St. John the Baptist
St. Landry	St. Martin	St. Mary	St. Tammany
Tangipahoa	Tensas	Terrebonne	Union
Vermilion	Vernon	Washington	Webster
West Baton Rouge	West Carroll	West Feliciana	Winn

4.	Paragraph 13.5 is amended as follows:
13.5 Survival of Restrictions. Employee will advise any future employer of the restrictions in this Agreement before accepting new employment. The post-employment restrictions provided for in this Agreement shall survive the termination of Employee’s employment with the Company.
 


Exhibit A – Maine

For an Employee who was a Maine resident at the time of his or her Separation Date or was otherwise subject to the laws of Maine during the Look Back Period, the Agreement is modified as follows:
1.	In addition to the claims released in Paragraph 3 of the Agreement, Employee agrees that this release includes, but is not limited to, claims under the Employee Social Media Privacy Law, the Employment Leave for Victims of Domestic Violence Law, the Employment Regulations of the Maine Human Rights Commission, the Maine AIDS Testing Law, the Maine Equal Pay Law, the Maine Family Medical Leave Act, the Maine Genetic Information Privacy Act, the Maine Human Rights Act, the Maine Occupational Safety & Health Act, the Maine Prompt Payment Statute, the Maine Statutory Provision Regarding Reasons for Termination, the Maine Review of Employee Records, the Maine Sexual Harassment Policies Law, the Maine Smokers’ Rights Law, the Maine Statutory Provision Regarding Retaliation or Discrimination for Filing Workers’ Compensation Claim, the Maine Substance Abuse Testing Law, the Maine Wage Payment and Work Hour Laws, and the Maine Whistleblower Protection Act.
 


Exhibit A – Massachusetts
For an Employee who was a Massachusetts resident at the time of his or her Separation Date or was otherwise subject to the laws of Massachusetts during the Look Back Period, the Agreement is modified as follows:
1.	In addition to the claims released in Paragraph 3 of the Agreement, Employee agrees that this release includes, but is not limited to, claims under the Massachusetts Civil Rights Act, M.G.L. ch. 12 § 11H, et seq.; Massachusetts Equal Pay Act, M.G.L. ch. 149 § 105A; Massachusetts Equal Rights Act, M.G.L. ch. 93 § 102, et seq.; Massachusetts Fair Employment Practices Law, M.G.L. ch. 151B; Massachusetts Family and Medical Leave Law, M.G.L. ch. 175M; claims for unpaid minimum wages and/or overtime under the Massachusetts Minimum Fair Wage Law, M.G.L. ch. 151; Massachusetts Privacy Statute, M.G.L. ch. 214 § 1B; Massachusetts Sexual Harassment Statute, M.G.L. ch. 214 § 1C; claims for unpaid wages, commissions, bonuses, and/or any other form of compensation under the Massachusetts Wage Act, M.G.L. ch. 149 §§ 148 and 150, et seq.; Massachusetts Non-Competition Agreement Act
M.G.L ch 149, § 24L; Massachusetts Parental Leave Act, M.G.L. ch. 149, § 105D, the Massachusetts Pregnant Workers Fairness Act and other claims that may be released under the Massachusetts labor statutes, M.G.L. ch. 149. This release and waiver of claims excludes claims that cannot be waived by law or private agreement.
2.	Paragraph 7 is supplemented as follows:
Waiver of Age Discrimination Claims and Revocation Period. Employee acknowledges and agrees that the Company has advised and encouraged them to consult with an attorney regarding this Agreement prior to signing below and that they have been given a period of at least forty-five (45) days within which they considered this Agreement and the waiver of any claims under the Age Discrimination in Employment Act “ADEA” and the other laws set forth in Paragraphs 3 and 4 above, and if applicable, Exhibit A, before signing below, if they so desired.
Employee agrees and understands that they may revoke this Agreement and their waiver of Age Discrimination in Employment Act claims within seven (7) business days after their execution of it, and that the Agreement shall not become effective or enforceable and no payments under Paragraph 2 shall be made until at least seven (7) business days after the date on which they sign below. Any revocation must be in writing and delivered by hand or certified mail to the Company’s General Counsel at 140 11th Avenue, North, Nashville, Tennessee 37203. Failure to revoke within seven (7) business days will result in the waiver being permanent. If Employee revokes within seven (7) business days, the entire Agreement is void.
3.	Paragraph 13.2 is amended as follows:
 
Employee agrees that for a period of twelve (12) months after termination of Employee’s employment with the Company, irrespective of the time, manner, or cause of termination, Employee will not, directly or indirectly, contact or solicit a Restricted Employee for the purpose of inducing, soliciting, or encouraging the Restricted Employee to work for or provide services to Competing Business. For purposes of this Agreement, a Restricted Employee is any individual employed at the Company at any time in the twenty-four (24) month period immediately preceding Employee’s termination of employment with the Company as to whom Employee acquired Confidential Information or had material business contact during that twenty-four (24) month period. Nothing in this paragraph is meant to prohibit an employee of the Company who is not a party to this Agreement from becoming employed by another organization or person.
 
Exhibit A – Minnesota
For an Employee who was a Minnesota resident at the time of his or her Separation Date or was otherwise subject to the laws of Minnesota during the Look Back Period, the Agreement is modified as follows:
1.	In addition to the claims released in Paragraph 3 of the Agreement, Employee agrees that this release includes, but is not limited to, claims under Minnesota Chapter 181; Minnesota Dismissal for Age Act, Minn. Stat. § 181.81, et seq.; Minnesota Equal Pay for Equal Work Law, Minn. Stat. § 181.66, et seq.; Minnesota Fair Labor Standards Act, Minn. Stat. § 177.21, et seq.; Minnesota Human Rights Act, Minn. Stat. § 363A.01, et seq.; Minnesota Occupational Safety and Health Act, Minn. Stat. Ch. 182; Minnesota Parental Leave Act, Minn. Stat. § 181.940, et seq.; Minnesota Wage Payment and Work Hour Laws; Minnesota Whistleblower Protection, Minn. Stat. § 181.931, et seq.; Minnesota’s Lawful Use Statute, Minn. Stat. § 181.938; Minnesota’s Personnel Record Review Statute, Minn. Stat. § 181.960, et seq.; Retaliation for Filing Workers’ Compensation Claim, Minn. Stat. § 176.82.
2.	Paragraph 7 is supplemented as follows:
Employee may rescind (i.e., revoke and cancel) Employee’s release of claims arising under the ADEA within seven (7) calendar days of signing this Agreement. Employee may rescind (i.e., revoke and cancel) Employee’s release of claims arising under the Minnesota Human Rights Act within fifteen (15) calendar days of signing this Agreement. The rescission periods noted above run concurrently with one another as of the signature date.
To effectively rescind/revoke this Agreement, the rescission/revocation must be in writing, and must be delivered by hand or sent by certified mail, return receipt requested, and postmarked within the above-referenced period to the attention of the Company General Counsel at 140 11th Avenue, North, Nashville, Tennessee 37203. If Employee does not execute this Agreement and/or if Employee rescinds/revokes it, then this Agreement is null and void, and Employee shall not receive the Payment.

















Page 25 of 42
 
Exhibit A – Nevada
For an Employee who was a Nevada resident at the time of his or her Separation Date or was otherwise subject to the laws of Nevada during the Look Back Period, the Agreement is modified as follows:
1.	The provisions of Paragraph 13.3 shall be amended as follows:

13.3	Restriction on Interfering with Customer Relationships. Employee agrees that for a period of twelve (12) months after Employee’s Separation Date, Employee will not interfere with the Company’s business relationships with a Covered Customer, by soliciting with a Covered Customer to induce or encourage the Covered Customer to: (a) stop or reduce doing business with the Company or an Affiliate, or (b) to buy a Conflicting Product or Service; unless a duly authorized Company officer gives Employee written authorization to do so. The parties agree this restriction is inherently reasonable because it is limited to the places or locations where the Covered Customer is doing business at the time.

2.	The provisions of Paragraph 13.4 do not apply to Employee if Employee is paid solely on an hourly wage basis.

3.	For all Employees who are not paid solely on an hourly basis, the provisions of Paragraph 13.4 shall be amended as follows:

13.4	Restriction Against Unfair Competition. Employee agrees that for the Restricted Period, Employee will not participate in, supervise, or manage (as an employee, consultant, contractor, officer, owner, director, or otherwise) Competing Activities in the Restricted Area. For purposes of this Paragraph, the “Restricted Period” is calculated by dividing the Payment by the amount of salary and benefits Employee made at that time of termination. By way of example only, if Employee’s Payment equals $10,000, and Employee’s salary plus benefits equals $1,000 per week, Employee’s “Restricted Period” would equal
$10,000 ÷ $1,000 = 10 weeks.
















 

OGLETREE
 
Page 26 of 42
 
52050045.v1-
 
Exhibit A – New Jersey
For an Employee who was a New Jersey resident at the time of his or her Separation Date or was otherwise subject to the laws of New Jersey during the Look Back Period, the Agreement is modified as follows:
1.	In addition to the claims released in Paragraph 3 of the Agreement, Employee agrees that this release includes, but is not limited to, claims under the Jake Honig Compassionate Use Medical Cannabis Act, N.J.S.A. 24:6I-1, et seq.; Millville Dallas Airmotive Plant Job Loss Notification Act; New Jersey Cannabis Regulatory, Enforcement Assistance, and Marketplace Modernization Act, N.J.S.A. 24:6I-1, et seq.; New Jersey Civil Rights Act; New Jersey Conscientious Employee Protection Act, N.J.S.A. 34:19-3, et seq.; New Jersey COVID Anti-retaliation law, N.J.S.A. 34:11D–12; New Jersey Earned Sick Leave Law; New Jersey Equal Pay Act, N.J.S.A. 34:11-56.1, et seq.; New Jersey Fair Credit Reporting Act; New Jersey False Claims Act; New Jersey Family Leave Act, N.J.S.A. 34:11B-1, et seq.; New Jersey Genetic Privacy Act, N.J.S.A. 10:5-43, et seq.; New Jersey Law Against Discrimination,
N.J.S.A. 10:5-1, et seq.; New Jersey Laws Regarding Political Activities of Employees, Lie Detector Tests, Jury Duty, Employment Protection, and Discrimination; New Jersey Mini- COBRA; New Jersey Opportunity to Compete Act; N.J.S.A. 34:6B-11, et seq.; New Jersey Prevailing Wage Act; New Jersey Public Employees’ Occupational Safety and Health Act,
N.J.S.A. 34:6A-25, et seq.; New Jersey Security and Financial Empowerment Act, N.J.S.A. 34:11C-1; New Jersey Smokers’ Rights Law, N.J.S.A. 34:6B-1, et seq.; New Jersey Social Media Law, N.J.S.A. 34:6B-6; New Jersey Statutory Provision Regarding Retaliation or Discrimination for Filing Workers’ Compensation Claim, N.J.S.A. 34:15-39.1, et seq.; New Jersey Wage and Hour Law; New Jersey Wage Collection Law; New Jersey Wage Payment Law; New Jersey Wage Theft Act; and New Jersey Worker Freedom from Employer Intimidation Act, N.J.S.A. 34:19-9, et seq.
2.	Paragraph 18 (Arbitration) is supplemented to specifically identify the applicable state laws (identified above) that relate to any controversy or claim arising out of or relating to this Agreement or Employee’s Employment with, separation from, and/or affiliation with the Company that will be subject to final and binding arbitration.
 
Exhibit A – New York
For an Employee who was a New York resident at the time of his or her Separation Date or was otherwise subject to the laws of New York during the Look Back period, the Agreement is modified as follows:
1.	In addition to the claims released in Paragraph 3 of the Agreement, Employee agrees that this release includes, but is not limited to, claims under the New York Constitution,
N.Y. Const. Art. 1, § 1, et seq.; New York Criminal and Consumer Background Laws, N.Y. Correct. § 752, et seq., N.Y. Gen. Bus. Law § 380-B, et seq.; New York Human Rights Law,
N.Y. Exec. Law § 290, et seq.; New York Labor Law, N.Y. Labor § 10, et seq.; New York Marriage Equality Act, N.Y. Dom. Rel. Law § 10-a, et seq.; New York Persons with Genetic Disorders Law, N.Y. Civ. Rts. § 48, et seq.; New York Whistleblower Law, N.Y. Exec. Law § 740, et seq.; New York City Human Rights Act; the New York City Administrative Code; the New York City Human Rights Law; all regulations of the New York State Division of Human Rights; the New York Public Health Law § 3369; the New York State WARN Act; the New York Paid Family Leave law; regulations and wage orders of New York State Department of Labor; and regulations of New York State Division of Human Rights.
2.	Paragraph 5 is supplemented to include the New York State Division of Human
Rights.
3.	Paragraph 10 is supplemented to include the following: Employee agrees that
Employee does not possess any claim or allegation, either asserted or otherwise, that may be subject to or covered under the New York General Obligations Section 5-336 or the New York Civil Practice Law and Rules Section 5003-b.
 
Exhibit A – North Carolina
For an Employee who was a North Carolina resident at the time of his or her Separation Date or was otherwise subject to the laws of North Carolina during the Look Back period, the Agreement is modified as follows:
1.	Paragraph 13.3 is amended as follows: Employee agrees that for a period of twelve (12) months after Employee’s Separation Date, Employee will not interfere with the relationship between the Company and a Covered Customer of the Company that Employee served while Employee was employed with the Company during the Look Back Period, unless a duty authorized Company officer gives Employee written permission to do so. It shall be considered a prohibited act of interference for Employee to participate in soliciting, encouraging, or inducing such Covered Customer (a) to do business with a Competing Business, or (b) to stop or reduce doing business with the Company, except where such conduct is expressly authorized in writing by a duly authorized officer of the Company. The parties agree this restriction is inherently reasonable because it is limited to the places or locations where the Covered Customer is doing business at the time; and
2.	Paragraph 13.4 is amended as follows: Employee agrees that during the twelve
(12) month period following Employee’s Separation Date, Employee will not provide services (that serve the same function as those Employee provided to the Company) to a person or entity that markets products and services in competition with those provided by the Company to its Covered Customers within a 50 mile radius of the location(s) to which Employee was assigned or worked during the Look Back Period.
 
Exhibit A – North Dakota
For an Employee who was a North Dakota resident at the time of his or her Separation Date or was otherwise subject to the laws of North Dakota during the Look Back period, the Agreement is modified as follows:
1.	In addition to the claims released in Paragraph 3 of the Agreement, Employee agrees that this release includes, but is not limited to, claims under the North Dakota Age Discrimination Act, North Dakota AIDS Testing Law, North Dakota Equal Pay Act, North Dakota Human Rights Act, North Dakota State Policy Against Participation in Lawful Activity, North Dakota Wage Payment and Work Hour Laws, and North Dakota Whistleblower Law. You also expressly waive any and all rights that you may have under any state or local statute, executive order, regulation, common law, and/or public policy relating to unknown claims, including but not limited to all rights under N.D. Cent. Code § 9-13-02, which provides as follows: A general release does not extend to claims which the creditor does not know or suspect to exist in the creditor’s favor at the time of executing the release, which if known by the creditor, must have materially affected the creditor’s settlement with the debtor.
2.	The provisions of Paragraph 13.2 shall not apply.
3.	The provisions of Paragraph 13.3 shall be amended as follows:
Restriction on Interfering with Covered Customer Relationships. During employment with the Company, and for eighteen (18) complete calendar months thereafter, Employee will not, directly or indirectly, use the Company’s trade secrets to interfere with the relationship between the Company and a Customer. It shall be considered a prohibited act of interference for Employee to use the Company’s trade secrets to participate in soliciting, encouraging, or inducing a Covered Customer (a) to do business with a Competing Business, or
(b) to stop or reduce doing business with the Company, except where such conduct is expressly authorized in writing by an authorized officer of the Company. The parties stipulate that this restriction is inherently limited to a reasonable geography or geographic substitute because it is limited to the place or location where the Covered Customer is located at the time.
4.	The provisions of Paragraph 13.4 shall not apply.
5.	No provision or requirement of the Agreement will be construed or interpreted in a manner contrary to the public policy of the State of North Dakota.
 
Exhibit A – Oklahoma
For an Employee who was an Oklahoma resident at the time of his or her Separation Date or was otherwise subject to the laws of Oklahoma during the Look Back period, the Agreement is modified as follows:
The following language replaces Sections 13.1 through 13.5 of the Separation Agreement:
Employee agrees that they will not directly solicit the sale of goods, services, or a combination of goods and services from the established customers of the Company. Employee further agrees that they will not solicit, directly or indirectly, actively or inactively, the employees or independent contractors of the Company to become employees or independent contractors of another person or business.
 
Exhibit A – Oregon
For an Employee who was an Oregon resident at the time of his or her Separation Date or was otherwise subject to the laws of Oregon during the Look Back period, the Agreement is modified as follows:
1.	In addition to the claims released in Paragraph 3 of the Agreement, Employee agrees that this release includes, but is not limited to, claims under ORS Chapter 659A.
2.	Employee acknowledges and agrees that Employee does not have, or have never had, or are not aware of any facts that would support any claims or causes of action against the Company that in any way arise out of, involve, or relate to discrimination, harassment, or sexual assault, or that are otherwise covered under ORS 659A.370.
3.	Nothing in this Agreement restricts, or shall be construed to limit, your right to report, disclose, or discuss conduct that you believe in good faith constitutes unlawful discrimination, sexual harassment, or sexual assault, or that are otherwise covered under the Workplace Fairness Act, ORS 659A.370.
4.	The provisions of Paragraph 13.2 shall be amended as follows: Employee agrees that for a period of twelve (12) months following Employee’s Separation Date, Employee will not interfere with the Company’s business relationship with a Company employee, by: (a) soliciting, transacting business with, or communicating with such an employee to induce or encourage them to leave the Company’s employ (regardless of who first initiates the communication); (b) helping another person or entity evaluate a Company employee as an employment candidate; or (c) otherwise helping any person or entity hire an employee away from the Company; unless a duly authorized Company officer gives Employee written authorization to do so. Where required by state law, the foregoing restriction will only apply to employees with whom Employee had material business-related contact or about which Employee received Confidential Information, within the Look Back Period. This provision is limited to Company employees who were employed by the Company as of Employee’s Separation Date, at any time during the ninety-day (90) period immediately following Employee’s Separation Date, or within ninety (90) days preceding Employee’s Separation Date.
5.	The provisions of Paragraph 13.3 shall be amended as follows: Employee agrees that for a period of twelve (12) months after Employee’s Separation Date, Employee will not interfere with the Company’s business relationships with a Covered Customer, by soliciting, transacting business with, or communicating (regardless of who initiates the communication) with a Covered Customer to induce or encourage the Covered Customer to: (a) stop or reduce doing business with the Company or an Affiliate, or (b) to buy a Conflicting Product or Service; unless a duly authorized Company officer gives Employee written authorization to do so. The parties agree this restriction is inherently reasonable because it is limited to the places or locations where the Covered Customer is doing business at the time.
 
Exhibit A – Rhode Island
For an Employee who was a Rhode Island resident at the time of his or her Separation Date or was otherwise subject to the laws of Rhode Island during the Look Back period, the Agreement is modified as follows:
The provisions of Paragraph 13.4 shall not apply to an Employee who is classified as nonexempt under the Fair Labor Standards Act or a low-wage employee as that term is defined by R.I. Gen. Laws § 28-58-2(7).
 
Exhibit A – South Dakota
For an Employee who was a South Dakota resident at the time of his or her Separation Date or was otherwise subject to the laws of South Dakota during the Look Back period, the Agreement is modified as follows:
In addition to the claims released in Paragraph 3 of the Agreement, Employee agrees that this release includes, but is not limited to, claims under the South Dakota Equal Pay Law, South Dakota Human Relations Act, South Dakota Smokers’ Rights Law, South Dakota Use of Genetic Information, and South Dakota Wage Payment and Work Hour Laws. You also expressly waive any and all rights that you may have under any state or local statute, executive order, regulation, common law and/or public policy relating to unknown claims, including but not limited to all rights under S.D. Codified Laws § 20-7-11, which provides as follows: “A general release does not extend to claims which the creditor does not know or suspect to exist in the creditor’s favor at the time of executing the release, which if known by him must have materially affected his settlement with the debtor.”
 
Exhibit A – Virginia
For an Employee who was a Virginia resident at the time of his or her Separation Date or was otherwise subject to the laws of Virginia during the Look Back period, the Agreement is modified as follows:
Paragraph 13 shall be amended to read as follows:
13.1	Definitions.
F.   “Restricted Area” means the Company’s area of legitimate competitive concern based on Employee’s responsibilities to the Company, knowledge of Confidential Information, and goodwill with customers, clients, business partners, dealers and agents as it exists in view of all relevant facts and circumstances. Therefore, if Employee’s responsibilities are sales or marketing, then the Restricted Area is the territory over which Employee had sales or marketing responsibilities during the Look Back Period. The Geographic Area is understood to be the area within a 50 mile radius of the location(s) to which Employee reported or was assigned during the Look Back Period.
13.2	Restriction on Interfering with Employee Relationships. Employee agrees that for a period of twelve (12) months following Employee’s Separation Date, Employee will not interfere with the Company’s business relationship with a Company employee, by: (a) soliciting or communicating with such an employee to induce or encourage them to leave the Company’s employ (regardless of who first initiates the communication); (b) helping another person or entity evaluate a Company employee as an employment candidate; or (c) otherwise helping any person or entity hire an employee away from the Company; unless a duly authorized Company officer gives Employee written authorization to do so. This provision is limited to Company employees who were employed by the Company as of Employee’s Separation Date, at any time during the ninety-day (90) period immediately following Employee’s Separation Date, or within ninety (90) days preceding Employee’s Separation Date.
13.4 Restriction Against Unfair Competition. Employee agrees that if Employee earned more than $1,024.00 per week or $62,608.00 per year, that for a period of twelve (12) months following Employee’s Separation Date, Employee will not participate in, supervise, or manage (as an employee, consultant, contractor, officer, owner, director, or otherwise) Competing Activities in the Restricted Area.
 
Exhibit A – Washington
For an Employee who was a Washington resident at the time of his or her Separation Date or was otherwise subject to the laws of Washington during the Look Back period, the Agreement is modified as follows:
1.	Paragraph 9 shall be amended as follows:
9.	Confidential Information. Employee acknowledges that in the course of their employment by the Company, Employee has had access to Confidential Information relating to the business and affairs of the Company, including, without limitation, trade secrets, designs, technology, know-how, processes, data, ideas, techniques, inventions (whether patentable or not), works of authorship, formulas, business and development plans, customer lists, terms of compensation and performance levels of the Company’s employees that Employee gained access to as part of their job duties , information regarding the Company’s facilities, processes, operating procedures, financial data, purchasing practices, marketing, management procedures, books and records, employee or personnel data, contractual arrangements or proposals, properties and affairs of the Company, as well as the Company’s business plans and budgets, and information concerning the Company’s actual or anticipated business, research, and development (collectively, “Confidential Information”). Employee agrees that following the Separation Date, Employee will not, at any time, directly or indirectly, for any reason whatsoever, with or without cause, unless pursuant to a lawful subpoena, breach the confidentiality of the information by using, disseminating, or disclosing any of the Company’s Confidential Information to any person or entity, nor will Employee use any Confidential Information in competing with the Company for any purpose. It is expressly understood that the Confidential Information covered by this Paragraph 9 only includes the Company’s confidential or proprietary information, and therefore does not include information that is generally available to the public. The Company may specifically enforce this provision through an action at law or in equity at any time the Company deems necessary.
9.1	Nothing in this Section is intended to or shall prohibit Employee from disclosing or discussing conduct, or the existence of a settlement involving conduct, that Employee reasonably believed under Washington State, federal, or common law to be illegal discrimination, illegal harassment, illegal retaliation, a wage and hour violation, or sexual assault, or that is recognized as against a clear mandate of public policy.
2.	Paragraph 10 shall be amended as follows:
10.	Confidentiality of Agreement. Employee desires this Agreement to be confidential and that such confidentiality is to the mutual benefit of both Employee and Employer. Employee agrees that they will not disclose, or cause to be disclosed, the amount paid by Employer in consideration for this Agreement , to any third party, whether orally or in writing, except to Employee’s attorneys, accountants, and/or tax advisors, or to the extent otherwise required by law, but only on the condition that Employee advises such individual(s) in advance of disclosure that the amount paid by Employer pursuant to this Agreement is strictly
 
confidential and the individual(s) agree to be bound by this Agreement's confidentiality provisions. Employee further agrees that the consideration in Paragraph 2 above is bargained for and specifically includes consideration for the confidentiality obligations in Paragraph 10.
Nothing in this Agreement is intended to or shall prohibit Employee from disclosing or discussing conduct, or the existence of a settlement involving conduct, that Employee reasonably believed under Washington State, federal, or common law to be illegal discrimination, illegal harassment, illegal retaliation, a wage and hour violation, or sexual assault, or that is recognized as against a clear mandate of public policy.
3.	Paragraph 13 shall be amended to read as follows:
13. Protective Covenants. Employee agrees that the covenants below are (a) reasonable and necessary for the protection of the legitimate business interests of the Company,
(b) not against the public interest, and (c) do not place an unreasonable burden upon Employee’s ability to earn a living. To the extent this Agreement is entered pursuant to a layoff, this Section shall be enforceable for the period of time equal to the amount in consideration provided in Paragraph 2 divided by the Employee’s former normal rate of pay.
13.2	Restriction on Interfering with Employee Relationships. Employee agrees that for a period of twelve (12) months following Employee’s Separation Date, Employee will not interfere with the Company’s business relationship with a Company employee, by soliciting such an employee to induce or encourage them to leave the Company’s employ unless a duly authorized Company officer gives Employee written authorization to do so. Where required by state law, the foregoing restriction will only apply to employees with whom Employee had material business-related contact or about which Employee received Confidential Information, within the Look Back Period. This provision is limited to Company employees who were employed by the Company as of Employee’s Separation Date, at any time during the ninety- day (90) period immediately following Employee’s Separation Date, or within ninety (90) days preceding Employee’s Separation Date.
13.3	Restriction on Interfering with Customer Relationships. Employee agrees that for a period of twelve (12) months after Employee’s Separation Date, Employee will not interfere with the Company’s business relationships with a Covered Customer, by soliciting, directly or indirectly with a Covered Customer to induce or encourage the Covered Customer to: (a) stop or reduce doing business with the Company or an Affiliate unless a duly authorized Company officer gives Employee written authorization to do so. The parties agree this restriction is inherently reasonable because it is limited to the places or locations where the Covered Customer is doing business at the time.
13.7 Minimum Compensation. This Paragraph shall only be enforced against Employee if Employee’s annualized income met or exceeded the minimum amount required under Washington law.
 
4.	Paragraph 18 shall be amended to read as follows:
18.	Arbitration. Any controversy or claim arising out of or relating to this Agreement or Employee’s employment with, separation from, and/or affiliation with Company, shall be settled by arbitration in accordance with the Employment Dispute Resolution Rules of the American Arbitration Association, and judgment upon the award rendered by the arbitrator may be entered in any court having jurisdiction. In reaching their decision, the arbitrator shall have no authority to change or modify any provision of this Agreement. To the extent Washington law applies to Employee, the Company will be responsible for all fees, except for any fees which are the equivalent of a filing a complaint any plaintiff would incur filing a lawsuit.

5.	Paragraph 22 shall be amended to read as follows:
22.	Governing Law; Consent to Personal Jurisdiction. This Agreement will be governed by the laws of the state of Washington.
 
Exhibit A – West Virginia
For an Employee who was a West Virginia resident at the time of his or her Separation Date or was otherwise subject to the laws of West Virginia during the Look Back period, the Agreement is modified as follows:
1.	In addition to the claims released in Paragraph 3 of the Agreement, Employee agrees that this release includes, but is not limited to, claims under the West Virginia Human Rights Act, W. Va. Code § 5-11-1, et seq.
2.	Employee also acknowledges they are: (a) entering into this Agreement knowingly and voluntarily; and (b) have been advised by this Agreement to consult with an attorney before signing this Agreement (the toll-free telephone number of the West Virginia State Bar Association is 1-800-642-3617. Attached a disclosure of certain information provided pursuant to § 77-6-4 of the West Virginia Administrative Code.
 
Exhibit A – Wisconsin
For an Employee who was a Wisconsin resident at the time of his or her Separation Date or was otherwise subject to the laws of Wisconsin during the Look Back period, the Agreement is modified as follows:
1.	Paragraph 9 “Confidential Information” is amended by adding the following after the last sentence of Paragraph 9:

The above obligation of non-disclosure and non-use of Confidential Information shall last only so long as the information remains confidential. However. Employee understands and agrees that to the extent this obligation of non-disclosure and non-use of Confidential Information applies to information that does not meet the definition of a trade secret under applicable law, it shall apply only for twenty-four (24) months after Employee’s Separation Date and only in geographic areas in which the unauthorized use or unauthorized disclosure of such Confidential Information could competitively harm the Company. Employee also understands that trade secrets are protected by statute and are not subject to any time limits. Nothing in this Agreement limits or affects the protection given to confidential information and trade secrets under statutory and common law.
2.	Section 13.1.D “Competing Activities” is amended as follows:

Competing Activities” are any activities or services undertaken on behalf of a Competing Business that (i) are the same or similar in function or purpose to those Employee performed for the Company in the Look Back Period and are also performed in connection with a Competing Product or Service, or (ii) are otherwise probable or likely to result in the use or disclosure of Confidential Information. Competing Activities are understood to exclude: activities on behalf of an independently operated subsidiary, division, or unit of a diversified corporation or similar business that has common ownership with a Competing Business so long as the independently operated business unit does not involve a Conflicting Product or Service; and, a passive and non-controlling ownership interest in a Competing Business through ownership of less than 2% of the stock in a publicly traded company.
3.	Paragraph 13.1F “Restricted Area” is amended by replacing its last two sentences with the following:

If Employee’s responsibilities to the Company are nationwide in scope (such as, by way of example, Employee’s executive, corporate, or administrative responsibilities), then the Restricted Area is the United States. Otherwise, the Restricted Area is understood to be the area within a 30 mile radius of the location(s) to which Employee reported or was assigned during the Look Back Period.
 
4.	Paragraph 13.2 “Restrictions on Interfering with Employee Relationships is stricken and replaced with the following:

Restriction on Interfering with Employee Relationships. Employee agrees that for a period of twelve (12) months following Employee’s Separation Date, Employee will not interfere with the Company’s business relationship with a Key Employee by: (a) soliciting or communicating with such an employee to induce or encourage them to leave the Company’s employ (regardless of who first initiates the communication) and engage in Competing Activities unless a duly authorized Company officer gives Employee written authorization to do so. This provision is limited to Company employees who were employed by the Company as of Employee’s Separation Date or within ninety (90) days preceding Employee’s Separation Date. For purposes of this Paragraph 13.2, “Key Employee” shall mean any person who is: (a) employed by the Company, and is either someone with whom Employee had material contact with and obtained Confidential Information about that could be used to persuade the Key Employee to leave his or her employment with the Company or was supervised by Employee during the twelve (12) months immediately preceding the Employee’s Last Day, and (b) is a manager, officer, director, or executive of the Company; and/or is in possession of Confidential Information and/or trade secrets of the Company that could be used by a Competing Business to compete with the Company. Notwithstanding the foregoing, this Paragraph 13.2 does not prohibit Employee from conducting generalized searches for employees or independent contractors by use of general advertisements or solicitations, including but not limited to advertisements or solicitations through newspapers, internet or other media of general circulation or engaging and using a search firm not specifically targeted at such individuals.

5.	Paragraph 13.3 “Restriction on Interfering with Customer Relationships” is amended as follows:
13.3	Restriction on Interfering with Customer Relationships. Employee agrees that for a period of twelve (12) months after Employee’s Separation Date, Employee will not interfere with the Company’s business relationships with a Covered Customer, by soliciting or communicating (regardless of who initiates the communication) with a Covered Customer to induce or encourage the Covered Customer to: (a) stop or reduce doing business with the Company or an Affiliate and replace or substitute that business with the business of a Competing Business, or (b) to buy a Conflicting Product or Service; unless a duly authorized Company officer gives Employee written authorization to do so. The parties agree this restriction is inherently reasonable because it is limited to the places or locations where the Covered Customer is doing business at the time.

6.	Paragraph 13.5 “Survival or Restrictions” is amended as follows:

13.5	Survival of Restrictions. Employee will advise any future employer of the restrictions in this Agreement before accepting new employment. The post-employment restrictions provided for in this Agreement shall survive the termination of Employee’s employment with the Company.
 
28.	Signatures.
PLEASE READ CAREFULLY. THIS AGREEMENT INCLUDES THE RELEASE OF ALL KNOWN AND UNKNOWN CLAIMS. EMPLOYEE UNDERSTANDS THAT THEY ARE ADVISED IN WRITING TO CONSULT WITH AN ATTORNEY BEFORE SIGNING THIS AGREEMENT, AND FURTHER UNDERSTANDS THAT THEY ARE GIVING UP ANY LEGAL CLAIMS THEY HAVE OR MAY HAVE AGAINST THE COMPANY BY SIGNING THIS AGREEMENT. EMPLOYEE FURTHER ACKNOWLEDGES THAT THEY ENTER INTO THIS AGREEMENT KNOWINGLY, WILLINGLY AND VOLUNTARILY IN EXCHANGE FOR THE BENEFITS DESCRIBED HEREIN.
IN WITNESS WHEREOF, Employee and Company have executed this Agreement as of the date set forth below.

 
Employee:
 
Jason Ross
Signature:
Email:
 



jason.ross841@outlook.com
 



 
 
PRODUCT DEVELOPMENT (Hoffman)
Attachment 1

Job Profile	SELECTED
Age	NO	YES
EXC1002 - Executive Administrative Assistant	1	
71	1	
TPN2034 - Software Engineer 1	2	
24	1	
33	1	
TPN2037 - SQA Engineer 1	2	
30	1	
34	1	
TPN3010 - Technology Analyst 2	2	
32	1	
62	1	
TPN3011 - Technology Analyst 3	3	1
38	1	
55	1	
66	1	
67		1
TPN3015 - Project Manager 3		1
51		1
TPN3016 - Software Engineer 2	19	4
23	1	
24	1	
25	1	1
26	1	
27	2	
28	1	
29	3	1
31	2	
32	2	
34		1
37	1	
39	1	
41	1	1
42	1	
43	1	
TPN3017 - Software Engineer 3	30	3
24	1	
26	1	
27	1	
28	3	
29	3	
30	2	
31	3	
 
PRODUCT DEVELOPMENT (Hoffman)
Attachment 1

32	3	
33	4	1
34	4	
35	1	
38	1	
39		1
40		1
43	2	
52	1	
TPN3021 - Operations Engineer 3	1	
41	1	
TPN3023 - SQA Engineer 3	5	
32	1	
33	1	
35	1	
39	1	
54	1	
TPN3038 - Manager, Software Engineering	2	
35	2	
TPN3039 - Manager, SQA	2	
31	1	
52	1	
TPN3040 - Manager, Tech Analysis	1	
47	1	
TPN4008 - Sr Manager IT	1	
54	1	
TPN4012 - Software Engineer 4	12	4
26	1	
29	2	
34	2	
35		1
36	2	
39	1	
40	1	
41	1	1
42	1	
45	1	1
50		1
TPN4013 - Technology Analyst 4	2	
57	1	
61	1	
TPN4014 - Principal Technology Analyst	1	
39	1	
TPN4020 - Principal Software Engineer	12	1
 
PRODUCT DEVELOPMENT (Hoffman)
Attachment 1

30	2	
35	1	
38	2	
40	1	
41	3	
42	1	
45	1	
46	1	
47		1
TPN4025 - SQA Engineer 4	3	
39	2	
46	1	
TPN4039 - Senior Manager, Software Engineering	5	1
31	1	
35	1	
38	1	1
42	1	
51	1	
TPN4072 - Sr Manager, Technical Product Management	1	
43	1	
TPN5009 - Senior Principal Software Engineer	2	
40	2	
TPN5020 - Director, Software Engineering	3	2
36	1	
40	1	
46		1
56	1	
58		1
TPN6016 - Senior Director, Software Engineering	3	1
44		1
47	1	
51	1	
52	1	
TPN7020 - VP Technology - Engineering		1
64		1
Grand Total	115	19


    
    `;

    const result = await model.generateContent(prompt);

    const modelResponse = result.response.text();
    return modelResponse;
}
const query = await geminiClient()
console.log(query);